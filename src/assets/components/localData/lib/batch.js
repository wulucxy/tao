var $ = window.$ || require("jquery");

module.exports =  {
	batch : [
	    {
	        "code": 1,
	        "name": "第一批"
	    },
	    {
	        "code": 2,
	        "name": "第二批"
	    },
	    {
	        "code": 3,
	        "name": "第三批"
	    },
	    {
	        "code": 4,
	        "name": "第四批"
	    }
	],
	getBatchName : function(code){
		var that = this;
		var name;
		$.each(that.batch,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	}
};