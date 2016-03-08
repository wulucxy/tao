var $ = window.$ || require("jquery");
var extend =  require('object-assign');

function Plugin(t,o){
	this.target = t;
	this.ul = t.find('ul');
	this.li = t.find('li');
	this.visible_item = o.visible_item;
	this.len = this.li.length;
	this.timer = null;
	this.oW = this.li.eq(0).width();
    this.options = o;
	this.init();
}

Plugin.prototype = {
	init : function(){
		var o = this.options;
		this.ul.width(this.len * this.oW);
		if(o.nav && this.len > 1){
          this.nav();
        }
	},

	nav : function(){
		var that = this;
		var name = 'dot';

	    var html = '<div class="dots">';
	      $.each(this.li, function(index) {
	        html += '<a href="#" class="' + (index == that.visible_item ? name + ' active' : name) + '">'+(++index)+'</a>';
	    });
        html += '</ol>';
        this.target.append(html);
        this.dots = this.target.find('.dots');
        this.dot = this.target.find('.'+name);
        this.bindEvt();
	},
	bindEvt : function(){
		var that = this, $this = that.target,o = that.options;
        this.dots.on('click','.dot',function(e){                         //点击触发，自动轮播
          e.preventDefault();
          var me = $(this);
           if(me.hasClass('active')){return false;}
           if(me.hasClass('dot')){
           	 that.to($this.find('.dot').index(this));
           }
        });

        if(o.delay){
	        that.timer=setInterval(function() {
	            that.to();
	        },o.delay);
    	}

        if (o.pause) {
          $this.mouseenter(function() {
            clearInterval(that.timer);
          }).mouseleave(function(){
            clearInterval(that.timer);
            that.timer=setInterval(function(){
              that.to();
            },o.delay);
          }); 
        }
	},
	to : function(index,callback){
        var that = this, $this = that.target,o = that.options;
        if (typeof index == "undefined") { 
          index = that.visible_item + 1;                   
          index = index >= this.li.length ? 0 : index;         
        }
           
        if(index==-1) index=that.li.length-1;
        if(index==that.li.length) index=0;

        $this.find('.dot').eq(index).addClass('active').siblings().removeClass('active');
   
        that.ul.animate({marginLeft: '-' + (index*that.oW)}, o.speed, function() {
          that.visible_item = index;  
        });
    }

};

var direct = function (target,settings) {
    var defaultSettings = {
       nav : true,
       speed : 500,
       visible_item : 0,
       delay : 4000,
       pause : true

    };
    settings = extend(defaultSettings, settings);

    return target.each(function(index) {
      var me = $(this);  
        return new Plugin(me,settings);
    });
};

module.exports = direct;