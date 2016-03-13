var $ = window.$ || require("jquery");
var extend =  require('object-assign');

require("./index.less");

	function Plugin(t,o){
		this.target=t;
		this.settings=o;
		this.trigger = this.target.find(o.trigger),
		this.ul = this.target.find(".options");
      	this.lists = this.ul.find("li");

		this.init(this.settings);
	}

	Plugin.prototype={
		init : function(){
			this.bindEvt();
		},

		bindEvt : function(){
			var that = this,o = that.settings;

			that.trigger.on("click",function(){
		        if($(this).hasClass('disabled')) return;
		        that.toggle($(this));
	      	});

	      	that.ul.on('mouseenter', 'li', function(e) {
		        $(this).addClass('current');
		    });

		    that.ul.on('mouseleave', 'li', function(e) {
		        $(this).removeClass('current');
		    });

		    that.ul.on('click','li',function(e){
	          var index = $(this).index();
	          if(!$(this).hasClass("disabled")){
	            that.updateTriggerText(index);
	            $(this).siblings().removeClass('current');
	            $(this).addClass('current');
	            that.toggle();
	            o.selectCallback && o.selectCallback($(this),index);
	          }
	      	});
		},

		updateTriggerText : function(index){
	      var that = this;
	      if(typeof index=='undefined'){
	        that.trigger.find(".triggerTxt").text("未选择");
	        that.trigger.addClass('disable');
	      }else{
	        that.trigger.find(".triggerTxt").text(that.lists.eq(index).text());
	      }

	      that.selectedIndex = index;
	    },

		toggle : function(){
	      var that = this;
	      that.trigger.toggleClass('open');
	      if(!that.ul.hasClass("open")){
	      	that.ul.show(50,function(){
	      		that.ul.addClass("open");
	      	});
	      }else{
	      	that.ul.removeClass("open");
	      	setTimeout(function(){
	      		that.ul.hide();
	      	},400)
	      }
	      
	    },

	    close : function(){
	      var that = this;
	      that.trigger.removeClass('open');
	      that.ul.removeClass('open');
	    }
	};
	

var beautifySelect = function(target,o) {
	var instance = $.data( $(target), 'beautifySelect' );
	var settings=extend({
		"trigger" : "[data-toggle]"
	},o);

	
	$(target).each(function(index) {
		var me = $(this);  
		if ( instance ) {
          instance.init();
        }else {
            instance = $.data( this, 'beautifySelect', new Plugin( me,settings ) );
        }
	});
	return instance;
};	

module.exports = beautifySelect;