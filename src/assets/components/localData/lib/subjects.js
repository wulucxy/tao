var $ = window.$ || require("jquery");

module.exports = {
	getSubjectName : function(code){
		var that = this;
		var name;
		$.each(that.subjectType,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	subjectType : [
        {
            "code": 1,
            "name": "物理"
        },
        {
            "code": 2,
            "name": "化学"
        },
        {
            "code": 3,
            "name": "生物"
        },
        {
            "code": 4,
            "name": " 技术"
        },
        {
            "code": 5,
            "name": "政治"
        },
        {
            "code": 6,
            "name": "地理"
        },
        {
            "code": 7,
            "name": "历史"
        }
    ]
};