var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");

var localData = require("../../../assets/components/localData");

//工具类方法
var util = require("../../../assets/components/util");

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
        	inputList.push('<input type="hidden" name="city">');
        	// inputList.push('<input type="hidden" name="collegeType">');
        	// inputList.push('<input type="hidden" name="ownerType">');
        	inputList.push('<input type="hidden" name="level">');
        	inputList.push('<input type="hidden" name="feature">');
        	$(".crumb").append(inputList.join(""));
        }

        var _key = "0";
    	$.each(that.state.tagList,function(idx,item){
    		$('[name='+item.type+']').val(item.value || "");
    		_key += $('[name='+item.type+']').val();
    	});

    	//分页
    	// if(!that.pager){
    	// 	that.pager = 1;
    	// }
	},

	requestData : function(btn){
		var that = this,o = that.options;

		var _data = {
            province: Number($("[name=city]").val()),
            capacity : that.capacity,
			// collegeType : $("[name=collegeType]").val(),
			// ownerType : $("[name=ownerType]").val(),
			level : $("[name=level]").val(),
			feature : [Number($("[name=feature]").val())]
		};

		var _key = _data.city + _data.level + _data.feature;
		
        //如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

        _data.page = that.pager;

      
		$.ajax({
			url : preServer+provinceId + "/data/college",
			type : "post",
            contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

                if(res.code !=1){
                    warn(res.msg);
                    return;
                }

                res = res.result;

                //客户端修改数据
                $.each(res.colleges,function(idx,ele){

                    //增加code,name
                    ele.code = ele.collegeId;
                    ele.name = ele.collegeName;

                    //获取city名称
                    ele.city = {
                        code : ele.city,
                        name : localData.getCityName(ele.city)
                    };

                    //获取getCollegeTypeName(院校属性)
                    ele.collegeType = {
                        code : ele.collegeType,
                        name : localData.getCollegeTypeName(ele.collegeType)
                    };

                    //获取getCollegeTypeName(院校性质)
                    ele.ownerType = {
                        code : ele.ownerType,
                        name : localData.getOwnerTypeName(ele.ownerType)
                    };

                    //获取getLevelName(院校层次)
                    ele.level = {
                        code : ele.level,
                        name : localData.getLevelName(ele.level)
                    };

                    //获取featrueList
                    ele.feature = $.map(ele.feature,function(el,index){
                        return {
                            type : el,
                            name : localData.getFeatureName(el)
                        };
                    });
                });
				
				that.loadList(res,that.pager);
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
        console.log('data', data)
		var _html = tmpl(data);

		if(pager == 1){
			$(".schoolList").empty().html(_html);
		}else{
			$(".schoolList").append(_html);
		}

        if(pager == 1 && data.total == 0){
            $(".btn-loading").hide();
        }else{
            $(".btn-loading").show();
            $(".btn-loading").removeClass("loading disabled");
        }

        var pageCount = Math.ceil(data.total / that.capacity);

		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
            $(".btn-loading").removeClass("loading-all");
        }
	},

	updateUI : function() {
       this.render(); 
    },

    init : function(o){
    	this.state = {
            tagList:  []
        };

        this.options = o;

        this.capacity = 10;

        //保存分页对象
        this.pager = 1;

        this.render();
        this.bindEvt();
        
    },

    searchCollegeReq : function(btn,keyword){
        var that = this;
        var oInput = $("#collegeInput");
        $.ajax({
            url : preServer+provinceId + "/data/college/search",
            type : "post",
            data : JSON.stringify({keyword : keyword || oInput.val(),page : that.pager }),
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

                res = res.result;

                //客户端修改数据
                $.each(res.colleges,function(idx,ele){
                    //增加code,name
                    ele.code = ele.collegeId;
                    ele.name = ele.collegeName;

                    //获取city名称
                    ele.city = {
                        code : ele.city,
                        name : localData.getCityName(ele.city)
                    };

                    //获取getCollegeTypeName(院校属性)
                    ele.collegeType = {
                        code : ele.collegeType,
                        name : localData.getCollegeTypeName(ele.collegeType)
                    };

                    //获取getCollegeTypeName(院校性质)
                    ele.ownerType = {
                        code : ele.ownerType,
                        name : localData.getOwnerTypeName(ele.ownerType)
                    };

                    //获取getLevelName(院校层次)
                    ele.level = {
                        code : ele.level,
                        name : localData.getLevelName(ele.level)
                    };

                    //获取featrueList
                    ele.feature = $.map(ele.feature,function(el,index){
                        return {
                            type : el,
                            name : localData.getFeatureName(el)
                        };
                    });
                });

                btn.removeClass("disabled");
                that.loadList(res,that.pager);
                that.pager++;
            },
            error : function(err){
                btn.removeClass("disabled");
                console.log(err);
            }
        });

    },

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);

            $("#collegeInput").val("");

            that.state.searchType = 0;
    		
    		var type = link.data("value").split(":")[0],
    			val =  link.data("value").split(":")[1];

    		if(link.hasClass("current") || val == "" ) return;
            link.closest(".row").find(".item").removeClass("current");

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

             that.render();
			that.requestData(link);  		
    	});

    	$(document).on("click","[data-action=clear]",function(e){
    		e.preventDefault();

            that.state.searchType = 0;

            $("#collegeInput").val("");
    		$("[data-action=add]").removeClass("current");
			that.state.tagList = [];

            that.render();
			that.requestData();  		
    	});

    	$(document).on("click","[data-action=remove]",function(e){
    		e.preventDefault();

            $("#collegeInput").val("");

            //searchType控制是否为关键词搜索
            that.state.searchType = 0;

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

            that.render();
			that.requestData(link);  		
    	});

    	$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");

            // 区分是否为关键字搜索 or 筛选
            if(that.state.searchType == 1){
                var _key = $("#collegeInput").val() || decodeURI(util.getQuery("keyword"));
                that.searchCollegeReq($("#sBtn"),_key);
            }else if(that.state.searchType == 0){
                that.requestData(btn);
            }
    	});

        $("#sBtn").on("click",function(e){
            goSearch(e);
        });

        $("#collegeInput").on("keyup",function(e){
            if(e.keyCode == 13){
                goSearch(e);
            }else{
                return false;
            }
            
        });

        function goSearch(e){
            e.preventDefault();

            that.pager = 1;

            var oInput = $("#collegeInput"),btn = $(this).closest(".btn");
            if($.trim(oInput.val()) == ""){
                warn("请输入院校名称");
                return;
            }

            that.state.searchType = 1;

            if(btn.hasClass('disabled')) return;
            btn.addClass("disabled");

            that.state.tagList = [];
            $(".itemLists .item").removeClass("current");
            that.render();

            that.searchCollegeReq(btn);
        };

        //需要区分是通过导航搜索进来还是直接进来
        if(!!util.getQuery("keyword")){
            that.state.searchType = 1;
            that.searchCollegeReq($("#sBtn"),decodeURI(util.getQuery("keyword")));
            
        }else{
            that.state.searchType = 0;
            that.requestData();
        }
        
    }
};

module.exports = dataSet;