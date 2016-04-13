var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");

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

        if(!$("input[name=country]").length){
        	var inputList = [];
        	inputList.push('<input type="hidden" name="country">');
        	$(".m-nav").append(inputList.join(""));
        }

	},

	requestData : function(btn){
		var that = this,o = that.options;

        //默认首次加载US的数据
        // if(typeof btn == "undefined"){
        //     $("[name=country]").val("US");
            
        // };

		var _data = {
			country : $("[name=country]").val(),
			school_name_key : $("[name=school_name_key]").val()
		};

		var _key = _data.country + _data.school_name_key;

        //如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

		//_data.page = that.pager;

        var provinceId = $("[name=province]").val();

		$.ajax({
			url : preServer+provinceId + "/tzy/plan/abroad/assessment",
			type : "post",
            contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

                if(res.code == "1011"){
                    window.location = "/home/signin";
                    return false;
                }else if(res.code != "0"){
                    warn(res.msg);
                    return false;
                }

                //res = res.result;

				that.loadList(res,that.pager);
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl(data);

        $(".schoolListWrap").removeClass("preloading");
		if(pager == 1){
			$(".schoolList").empty().html(_html);
		}else{
			$(".schoolList").append(_html);
		}

		$(".btn-loading").removeClass("loading disabled");

        var pageCount = Math.ceil(data.total / that.capacity);
		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
            $(".btn-loading").removeClass("loading-all");
        };

        o.completeCallback && o.completeCallback.call(that);
	},

	updateUI : function() {
       this.render(); 
    },

    init : function(o){
    	this.state = {
            tagList:  []
        };

        this.options = o;

        //保存分页对象
        this.pager = 1;
        this.capacity  = 10;

        this.updateUI();
        this.bindEvt();
    },

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);
    		  
            //reset
            that.pager = 1;

    		var type = link.data("value").split(":")[0],
    			val =  link.data("value").split(":")[1];

    		if(link.hasClass("current") || val == "" ) return;
            link.siblings().removeClass("current");

            $.each(that.state.tagList,function(idx,item){
                if(type == item.type){
                    that.state.tagList.splice(idx,1);
                    return false;
                }
            });

    		link.addClass("current");

			that.state.tagList.push({
				type : type,
				value : val,
				text : link.text()
			});  

            $("[name=country]").val(val);

			that.updateUI();
            that.requestData(link);  		
    	});

    	$(document).on("click","[data-action=clear]",function(e){
    		e.preventDefault();
    		$("[data-action=add]").removeClass("current");
			that.state.tagList = [];
			that.updateUI(); 
            that.requestData(); 		
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
    	});

    	$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});

        //点击搜索
        $(".btn-search").on("click",function(e){
            e.preventDefault();
            var oInput = $("[name=school_name_key]");
            if($.trim(oInput.val()) == ""){
                warn("请输入院校名称");
                return false;
            }

            var btn = $(e.target).closest(".btn");

            that.requestData(btn);

        });

        //默认选中第一个
        $(".itemLists .item").eq(0).trigger("click");

    }
};

module.exports = dataSet;