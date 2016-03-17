var $ = window.$ || require("jquery");

module.exports =  {
	getCourseTypeName : function(code){
		var that = this;
		var name;
		$.each(that.courseType,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	"courseType": [
        {
            "code": 0,
            "name": "理科"
        },
        {
            "code": 1,
            "name": "文科"
        }
    ]
};