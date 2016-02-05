var $ = window.$ || require("jquery");
var extend =  require('object-assign');
 
function Plugin(t,o){
		this.target=t;
		this.options=o;
	   	this.tabs = t.find(o.tabsItem);
	 	this.items =t.find(o.items);
	 	this.visible_item = o.visible_item;
	 	
	 	this.tabs.eq(this.visible_item).addClass(o.klass);
	 	this.items.eq(this.visible_item).addClass(o.klass);
		this.total_items=this.tabs.length;
		this.init(this.options);
	   }
  
   Plugin.prototype.change=function(now){
	  var that = this, o = that.options, $this = that.target;
	  
	  if (typeof now == "undefined") {  	
				now = that.visible_item + 1;                   
				now = now >= that.total_items ? 0 : now;         
			}

	  that.tabs.removeClass(o.klass).eq(now).addClass(o.klass);
	  that.items.hide().removeClass(o.klass).eq(now).addClass(o.klass).show(0,function(){
		  that.visible_item=now;
		  });  
	  };
  
  Plugin.prototype.init=function(o){
	  var that = this, $this = that.target;
	  if(that.options.startCallback){
	  	 that.options.startCallback.call(that);
	  }
    that.change(o.visible_item);
	  that.tabs.off(o.event).on(o.event,function(e){
	  		e.preventDefault();
		  	if(o.event=='mouseover' || o.event=='click' ){
			  if($(this).hasClass(o.klass)){return;}
			  that.change($(this).index());
        if(that.options.callback){
          that.options.callback.call(that);
        }
			}
		  	else return false;
      });
	};

 var Tabs = function(target,o){
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