/**
 * 专业解读
 */

var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/majorInfo.ejs");

var localData = require("../../../assets/components/localData");

//工具类方法
var util = require("../../../assets/components/util");

var provinceId = $("[name=province]").val();

var dataSet = { 
	render : function(){
		var that = this;
		// 选择的列表
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

        if(!$("input[name=major]").length){
        	var inputList = [];
        	inputList.push('<input type="hidden" name="major">');
        	inputList.push('<input type="hidden" name="university">');
        	inputList.push('<input type="hidden" name="universityLevel">');
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
        var majorId =  $("[name=major]").val()
        var universityId = $("[name=university]").val()
        var universityLevel = $("[name=universityLevel]").val()
		var _data = {
            capacity : that.capacity
		};

        if (!util.isUndefined(majorId)) {
            _data.majorId = majorId;
        }
        if (!util.isUndefined(universityId)) {
            _data.universityId = universityId;
        }
        if (!util.isUndefined(universityLevel)) {
            _data.universityLevel = universityLevel;
        }
		
        //如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

        _data.page = that.pager;

      
		$.ajax({
			url : preServer+provinceId + "/newsV3/majorUnscrambleListWeb",
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
                res.result.majorUnscrambleList.forEach(function(item){
                    item.date = util.formatDate(item.newsDate, 'yyyy-MM-dd hh:mm:ss')
                })
                res.result.provinceId = provinceId
                res = res.result;
				that.loadList(res, that.pager);
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = tmpl(data);

		if(pager == 1){
			$(".majorList").empty().html(_html);
		}else{
			$(".majorList").append(_html);
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

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);

            $("#collegeInput").val("");

            that.state.searchType = 0;
    		
    		var type = link.data("value").split(":")[0],
    			val =  link.data("value").split(":")[1];

            link.closest(".row").find(".item").not(link).removeClass("current");
            link.toggleClass('current')

            $.each(that.state.tagList,function(idx,item){
                if(type == item.type){
                    that.state.tagList.splice(idx,1);
                    return false;
                }
            });

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

            if(that.state.searchType == 0){
                that.requestData(btn);
            }
    	});

        that.state.searchType = 0;
        that.requestData();
        
    }
};

module.exports = dataSet;