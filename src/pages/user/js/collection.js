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

                $.each(res.favorites,function(idx,ele){
                	//保存name和code
                	ele.college.code = ele.college.collegeId; 
                	ele.college.name = ele.college.collegeName; 

                	
                });

                

                //that.insertData.call(that,res);
			}
		});

	}


};

module.exports = collection;