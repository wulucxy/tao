var $ = window.$ || require("jquery");

module.exports = {
	getCollegeTypeName : function(code){
		var that = this;
		var name;
		$.each(that.collegeType,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	collegeType : [
        {
            "code": 1,
            "name": "综合"
        },
        {
            "code": 2,
            "name": "文理"
        },
        {
            "code": 3,
            "name": "理科"
        },
        {
            "code": 4,
            "name": "文科"
        },
        {
            "code": 5,
            "name": "工学"
        },
        {
            "code": 6,
            "name": "农学"
        },
        {
            "code": 7,
            "name": "法学"
        },
        {
            "code": 8,
            "name": "体育"
        },
        {
            "code": 9,
            "name": "文艺"
        },
        {
            "code": 10,
            "name": "艺术"
        }
    ]
};