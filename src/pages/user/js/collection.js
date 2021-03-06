var $ = window.$ || require("jquery");
var tabs = require("../../../assets/components/tabs");

//公共方法
var util = require("../../../assets/components/util");

//本地数据库
var localData = require("../../../assets/components/localData");

var tmpl_college = require("../templates/favCollege.ejs");
var tmpl_major = require("../templates/favMajor.ejs");
var tmpl_info = require("../templates/favNews.ejs");

var provinceId = $("[name=province]").val();

var collection = {
	init : function(){
		tabs($("#collectionWrapper"),{
			tabsItem : ".tab-item",
			items : ".content-wrap > section",
			klass : "current"
		});

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this;
		this.requestCollege();
		this.requestMajor();
		this.requestInfo();
	},

	requestCollege : function(){
		var that = this;
		$.ajax({
			url : preServer+provinceId+"/profile/favor/college",
			type : "get",
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                if(res.code!=1){
                    warn(res.msg);
                    return;
                }

                res = res.result;

                $.each(res.favorites,function(idx,el){
                	
                	var ele = el.college;
                	//保存name和code
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

                that.insertCollege.call(that,res);
			}
		});
	},

    insertCollege : function(data){
        var that = this;
        var _html = tmpl_college(data);
       $(".schoolList").append(_html);
    },
    requestMajor : function(){
        var that = this;
        $.ajax({
            url : preServer+provinceId+"/profile/favor/major",
            type : "get",
            contentType: "application/json",
            success : function(res){
                if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                 if(res.code!=1){
                    warn(res.msg);
                    return;
                }

                res = res.result;

                that.insertMajor.call(that,res);
            }
        });
    },

    insertMajor : function(data){
        var that = this;
        var _html = tmpl_major(data);
       $(".majorList").empty().append(_html);
    },

     requestInfo : function(){
        var that = this;
        $.ajax({
            url : preServer+provinceId+"/profile/favor/news",
            type : "get",
            contentType: "application/json",
            success : function(res){
                if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                 if(res.code!=1){
                    warn(res.msg);
                    return;
                }



                res = res.result;

                 $.each(res.favorites,function(idx,ele){
                    if(ele.news.newsDate){
                        ele.news.newsDate = util.formatDate(ele.news.newsDate,"yyyy-MM-dd hh:mm:ss");
                    }
                })

                that.insertInfo.call(that,res);
            }
        });
    },

    insertInfo : function(data){
        var that = this;
        var _html = tmpl_info(data);
       $(".favorInfoList").empty().append(_html);
    }


};

module.exports = collection;