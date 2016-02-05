var $ = window.$ || require("jquery");
var extend =  require('object-assign');
 
function Plugin(t,o){
		this.target=t;
		this.options=o;
		this.init(this.options);
	   }
  
   Plugin.prototype = {
   	init : function(){

   	},
   };

 var loadMore = function(target,o){
 	var settings=extend({
		event : 'click',       //触发条件
		visible_item : 0,      //默认显示条目
		callback : null,       //点击tab回调
		tabsItem : "",
		items : "",
		klass : "current"
	},o);

	return $(target).each(function(index) {
		var me = $(this);  
		return new Plugin(me,settings);
	});
 };

 module.exports = Tabs;