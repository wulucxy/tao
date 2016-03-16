var $ = window.$ || require("jquery");

module.exports =  {
	getLevelName : function(code){
		var that = this;
		var name;
		$.each(that.level,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	level :[
	    {
	        "code": 1,
	        "name": "本科"
	    },
	    {
	        "code": 2,
	        "name": "专科"
	    }
	]
};