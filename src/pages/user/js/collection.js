var $ = window.$ || require("jquery");
var tabs = require("../../../assets/components/tabs");

var collection = {
	init : function(){
		tabs($("#collectionWrapper"),{
			tabsItem : "nav li",
			items : ".content-wrap > section",
			klass : "current"
		});
	}


};

module.exports = collection;