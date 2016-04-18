var $ = window.$ || require("jquery");

module.exports =  {
	getOwnerTypeName : function(code){
		var that = this;
		var name;
		$.each(that.ownerType,function(idx,ele){
			if(ele.code == code){
				name = ele.name;
				return false;
			}
		});

		return name;
	},
	"ownerType": [
        {
            "code": 0,
            "name": "公办"
        },
        {
            "code": 1,
            "name": "民办"
        },
        {
            "code": 2,
            "name": "中外合资"
        }
    ]
};