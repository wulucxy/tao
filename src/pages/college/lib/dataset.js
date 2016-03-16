var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");

var localData = require("../../../assets/components/localData");

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
        	inputList.push('<input type="hidden" name="collegeType">');
        	inputList.push('<input type="hidden" name="ownerType">');
        	inputList.push('<input type="hidden" name="level">');
        	inputList.push('<input type="hidden" name="feature">');
        	$(".crumb").append(inputList.join(""));
        }

        var _key ="";
    	$.each(that.state.tagList,function(idx,item){
    		$('[name='+item.type+']').val(item.value || "");
    		_key += $('[name='+item.type+']').val();
    	});

    	//分页
    	if(!that.pageObject[_key]){
    		that.pageObject[_key] = 1;
    	}
    	 
        that.requestData();
	},

	requestData : function(btn){
		var that = this,o = that.options;

		var _data = {
			city : [$("[name=city]").val()],
			collegeType : $("[name=collegeType]").val(),
			ownerType : $("[name=ownerType]").val(),
			level : $("[name=level]").val(),
			feature : [Number($("[name=feature]").val())]
		};

		var _key = _data.city + _data.collegeType + _data.ownerType + _data.level + _data.feature;
		_data.page = that.pageObject[_key];

        var provinceId = $("[name=province]").val();

		$.ajax({
			url : "/v2/client/"+provinceId + "/data/college",
			type : "post",
            contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

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

                //如果是点击加载更多，页码++，否则重置为1
                if(btn){
                    that.pageObject[_key]++;
                }else{
                    that.pageObject[_key] = 1;
                }
				
				that.loadList(res,that.pageObject[_key]);
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl(data);

		if(pager == 1){
			$(".schoolList").empty().html(_html);
		}else{
			$(".schoolList").append(_html);
		}

		$(".btn-loading").removeClass("loading disabled");

		//最后一页
		if(pager > data.count){
			$(".btn-loading").addClass("loading-all");
		};
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
        this.pageObject = {};

        this.bindEvt();
        this.updateUI();
    },

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);
    		
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
    	});

    	$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});
    }
};

module.exports = dataSet;