var $ = window.$ || require("jquery");

module.exports =  {
	getFeatureName : function(code){
		var that = this;
		var name;
		console.log(code);
		$.each(that.feature,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	feature :[
	    {
            "code": 1,
            "name": "985"
        },
        {
            "code": 2,
            "name": "211"
        },
        {
            "code": 3,
            "name": "教育部直属"
        }
	]
};