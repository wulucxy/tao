var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/major.ejs");
var tmpl_all= require("../templates/major_all.ejs");

var provinceId = $("[name=province]").val();

var dataSet = { 
	render : function(){
		var that = this;
		//省列表
        if(this.state.tagList.length){
            var tagLis = $.map(that.state.tagList,function(item){
            	var _val = item.type+":"+item.value;
                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
            });

            var _htmlArr = [];
            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
            _htmlArr.push(tagLis.join(""));
            $(".crumb").html(_htmlArr.join(""));
        }else{
        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
        }

        if(!$("input[name=city]").length){
        	var inputList = [];
        	inputList.push('<input type="hidden" name="bachelor">');
        	inputList.push('<input type="hidden" name="junior">');
        	$(".crumb").append(inputList.join(""));
        }

        var _key ="";
    	$.each(that.state.tagList,function(idx,item){
    		$('[name='+item.type+']').val(item.value || "");
    		_key += $('[name='+item.type+']').val();
    	});
    	 
	},

    //点击各个大类触发专业选择
	requestData : function(btn){
		var that = this,o = that.options;

        var categoryId = btn.data("value").split(":")[1];

        var _data = {
			Undergraduate : $("[name=bachelor]").val(),
			speciality : $("[name=junior]").val()
		};

		$.ajax({
			url : preServer+provinceId + "/data/major/category/"+categoryId,
			type : "get",
            contentType: "application/json",
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

                if(res.code!=1){
                    warn(res.msg);
                    return;
                }

                res.majors = res.result;
               
				that.loadList(res);
			}
		});
	},

	loadList : function(data){
		var that = this,o = that.options;
		var _html = tmpl(data);

		$(".majorList").empty().html(_html);
	},

    loadListAll : function(data){
        var that = this,o = that.options;
        var _html = tmpl_all(data);
        $(".majorList").empty().html(_html);
    },

	updateUI : function() {
       this.render(); 
    },

    init : function(o){
    	this.state = {
            tagList:  []
        };

        this.options = o;

        //专业数据缓存
        this.majorDataCache;

        this.bindEvt();

        //首次进来默认加载全部数据
        this.requestAll();
    },

    //首次加载请求全部数据
    //本科：type：1
    //专科  type：2
    //默认为空，代表全部
    requestAll : function(type){
        var that = this;

        if(typeof that.majorDataCache != "undefined" ){  //已添加缓存

          console.log(that.majorDataCache);

          if(typeof type != "undefined"){
            that.majorDataCache.majors = that.majorDataCache[type];
          }

          that.loadListAll(that.majorDataCache);
          
          return;
        }

        $.ajax({
            url : preServer+provinceId + "/data/major/all",
            type : "get",
            contentType: "application/json",
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code!=1){
                    warn(res.msg);
                    return;
                }

                res = res.result;

                //所有专业
                var majorList = $.map(res.subs,function(ele,idx){
                    return ele.subs;
                });

                //本科专业
                var benMajorList = res.subs[0].subs;

                //本科专业
                var zMajorList = res.subs[1].subs;

                res.majors = majorList;
                res["1"] = benMajorList;
                res["2"] = zMajorList;

                //设置为缓存
                that.majorDataCache = res;
                
                that.loadListAll(res);
            }
        });
    },

    searchMajorReq : function(btn){
        var that = this;
        var oInput = $("#majorInput");
        $.ajax({
            url : preServer+provinceId + "/data/major/search",
            type : "post",
            data : {keyword : oInput.val() },
            contentType: "application/json",
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code != 1){
                    warn(res.msg);
                    btn.removeClass("disabled");
                    return;
                }

                res.majors = res.result;
                that.loadList(res);

            },
            error : function(err){
                console.log(err);
                btn.removeClass("disabled");
            }
        });

    },

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);
    		
    		var type = link.data("value").split(":")[0],
    			val =  link.data("value").split(":")[1];

    		if(link.hasClass("current")) return;
            $("[data-action=add]").removeClass("current");

            $.each(that.state.tagList,function(idx,item){
                if(type == item.type){
                    that.state.tagList.splice(idx,1);
                    return false;
                }
            });

    		link.addClass("current");
            that.state.tagList = [];
			that.state.tagList.push({
				type : type,
				value : val,
				text : link.text()
			});  

            //这边要区分,1：本科，2：专科
            var majorType;
            if(val == "" || val == "0"){
               if(type == "undergraduate" && val == ""){
                    majorType = 1;
               }else if(type == "undergraduate" && val == "0"){
                    majorType = 2;
               }else if(type == "speciality" && val == ""){
                    majorType = 2;
               }else if(type == "speciality" && val == "0"){
                    majorType = 1;
               }
               that.requestAll(majorType);
            }else{
			   that.requestData(link);
            }

            that.updateUI();  		
    	});

    	$(document).on("click","[data-action=clear]",function(e){
    		e.preventDefault();
    		$("[data-action=add]").removeClass("current");
			that.state.tagList = [];
			that.updateUI();  		
    	});

    	$(document).on("click","[data-action=remove]",function(e){
    		e.preventDefault();

    		var link = $(e.target).closest(".tags");
    		var type = link.data("value").split(":")[0],
    			value =  link.data("value").split(":")[1];
			
			 $.each(that.state.tagList,function(idx,item){
                if(type == item.type && value == item.value){
                    that.state.tagList.splice(idx,1);
                    var attr = '[data-value="'+type+':'+value+'"]';
                    $(attr).removeClass("current");
                    return false;
                }
            });

            that.updateUI(); 
			that.requestAll();  		
    	});

        $("#sBtn").on("click",function(e){
            e.preventDefault();
            var oInput = $("#majorInput"),btn = $(this).closest(".btn");
            if($.trim(oInput.val()) == ""){
                warn("请输入专业名称");
                return;
            }

            if(btn.hasClass('disabled')) return;
            btn.addClass("disabled");
            that.searchMajorReq(btn);

        })
    }
};

module.exports = dataSet;