var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");

var localData = require("../../../assets/components/localData");
var tmpl_favWrap = require("../templates/fav.ejs");
var tmpl_favList = require("../templates/favList.ejs");

var pagination = require("../../../assets/components/pagination");

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

                 $('[subject='+item.value+']').addClass("current");

                return '<a class="tags" data-action="remove" href="javascript:;" data-value="'+_val+'">'+item.text+'<span class="taoIcon btn-x"></span></a>';
            });

            var _htmlArr = [];
            _htmlArr.push('<a href="javascript:;" class="fr btn btn-default" data-action="clear">清空所有</a>');
            _htmlArr.push('<span class="cat-text fl">已选择：</span>');
            _htmlArr.push('<span class="tagsWrap">'+tagLis.join("")+'</span>');
            $(".crumb").html(_htmlArr.join(""));
        }else{
        	$(".crumb").html('<span class="cat-text fl">已选择：</span>');
        }

        if(!$("input[name=subjectList]").length){
        	var inputList = [];
            inputList.push('<input type="hidden" name="subjectList">');
        	$(".m-nav").append(inputList.join(""));
        }
	 
	},

	requestData : function(btn){
		var that = this,o = that.options;

        var subjectList = $.map(that.state.tagList,function(ele){
            return Number(ele.value);
        });

		var _data = {
            capacity : that.capacity,
            subjectList : subjectList
		};

        //如果是点击加载更多，页码++，否则重置为1
        if(btn){
            that.pager++;
        }else{
            that.pager = 1;
        }

        _data.page = that.pager;

		$.ajax({
			url : preServer+provinceId + "/data/subject/search",
			type : "post",
            contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

                if(res.code!=1){
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
		var _html = tmpl(data);


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
        }
	},

	updateUI : function() {
       this.render(); 
    },

    init : function(o){
        var that = this;
    	this.state = {
            tagList:  []
        };

        this.options = o;

        this.capacity = 10;
        //弹窗假分页对象
        this.pager = 1;
        this.len = 6;

        this.bindEvt();
        

        //需要区分是通过导航搜索进来还是直接进来
        if(!!util.getQuery("keys")){

            var subjectItems = $(".itemLists .item").map(function(idx,ele){
                return {
                   type : $(ele).data("value").split(":")[0],
                   value : $(ele).data("value").split(":")[1],
                   text : $(ele).text()
                }
            });

            var keys = util.getQuery("keys").split("");

            $.each(keys,function(idx,ele){
                $.each(subjectItems,function(d,e){
                    if(ele == e.value){
                        that.state.tagList.push({
                            type : e.type,
                            value : e.value,
                            text : e.text
                        });

                        return false;
                    }
                });
            });

            this.updateUI();
            this.requestData();
            
        }else{
            this.updateUI();
            //首次进来默认加载全部数据
            this.requestData();
        }

    },

    bindEvt : function(){
    	var that = this;
    	$(document).on("click","[data-action=add]",function(e){
    		e.preventDefault();
    		var link = $(e.target);
    		
    		var type = link.data("value").split(":")[0],
    			val =  link.data("value").split(":")[1];

    		if(link.hasClass("current") || val == "" ) return;
            //link.siblings().removeClass("current");

            // $.each(that.state.tagList,function(idx,item){
            //     if(type == item.type){
            //         that.state.tagList.splice(idx,1);
            //         return false;
            //     }
            // });

            //if(that.state.tagList.length<4){
                that.state.tagList.push({
                    type : type,
                    value : val,
                    text : link.text()
                });  
                
            //}
			


			that.updateUI();  
            that.requestData();		
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
            that.requestData();   		
    	});

    	$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});

        //收藏
        $(document).on("click",".favMajorBtn",function(e){
            e.preventDefault();
            var btn = $(e.target).closest(".btn");
            if(btn.hasClass("disabled")) return false;
            btn.addClass("disabled");
            that.reqCollegeInfo(btn);
        });
    },

    pagination : function($page,data){
        var that = this;   

        var pageCount = Math.ceil(data.majors.length / 6);

        pagination($page,{
          pages: pageCount,
          displayedPages: 3,
          currentPage : 1,
          edges: 1,
          onPageClick : function(pageNo){
            that.requestItemList(pageNo);
          }
        });
    },

    requestItemList : function(pager){
        var that = this;

        that.majorRes.subMajors = that.majorRes.majors.slice((pager-1)*that.len,pager*that.len);
        that.pager++;

        that.renderList(that.majorRes);
    },

    renderList : function(data){
        var that = this;
        $(".majorList").empty().append(tmpl_favList(data));
    },

    majorBox : function(btn,data){
        var that = this;

        modalBox(btn,{
        html:tmpl_favWrap(data),
        klass : 'w540 shadow',
        closeByOverlay : false,
        startCallback : function(){

            that.pager = 1;
            that.requestItemList(that.pager);

            if(!$('.majorListWrap').find('.pagination').length){
               $('.majorListWrap').append('<div class="pagination"></div>');
                   var $page = $('.majorListWrap').find('.pagination');
                   that.pagination($page,data);
            }
        },
        completeCallback : function(){
            var self = btn; 
            
            
            
        },
        closeCallback : function(){
            btn.removeClass("disabled");
        }

    });
    },

    reqCollegeInfo : function(btn){
        var that = this;

        var subjectList = $.map(that.state.tagList,function(ele){
            return Number(ele.value);
        });

        $.ajax({
            url : preServer+provinceId + "/data/subject/"+btn.attr("collegeid"),
            type : "post",
            data : JSON.stringify({subjects : subjectList}),
            success : function(res){
                if(typeof res == "string"){
                    var res = $.parseJSON(res);
                }

                if(res.code!=1){
                    warn(res.msg);
                    return false;
                }

                //保存数据
                that.majorRes = res.result;
                
                that.majorBox(btn,that.majorRes);
            }
        })


    }
};

module.exports = dataSet;