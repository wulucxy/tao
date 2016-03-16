var $ = window.$ || require("jquery");
var tabs = require("../../../assets/components/tabs");

var provinceId = $("[name=province]").val();

var collection = {
	init : function(){
		tabs($("#collectionWrapper"),{
			tabsItem : "nav li",
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
			url : "/v2/client/"+provinceId+"/profile/favor/college",
			type : "get",
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                $.each(res.favorites,function(idx,el){
                	
                	var ele = el.college;
                	//保存name和code
                	ele.college.code = ele.college.collegeId; 
                	ele.college.name = ele.college.collegeName; 

                	//获取city名称
                    ele.college.city = {
                        code : ele.city,
                        name : localData.getCityName(ele.city)
                    };

                    //获取getCollegeTypeName(院校属性)
                    ele.college.collegeType = {
                        code : ele.collegeType,
                        name : localData.getCollegeTypeName(ele.collegeType)
                    };

                    //获取getCollegeTypeName(院校性质)
                    ele.college.ownerType = {
                        code : ele.ownerType,
                        name : localData.getOwnerTypeName(ele.ownerType)
                    };

                    //获取getLevelName(院校层次)
                    ele.college.level = {
                        code : ele.level,
                        name : localData.getLevelName(ele.level)
                    };

                    //获取featrueList
                    ele.college.feature = $.map(ele.feature,function(el,index){
                        return {
                            type : el,
                            name : localData.getFeatureName(el)
                        };
                    });
                });

                

                //that.insertData.call(that,res);
			}
		});

	}


};

module.exports = collection;