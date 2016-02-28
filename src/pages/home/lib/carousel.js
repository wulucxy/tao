var $ = window.$ || require("jquery");
var extend =  require('object-assign');


var carousel = {
	init : function(o){
		this.target= $(".collegeWrap");

		var settings=$.extend({
			speed: 500,   
			delay: 2000,  
			pause: true,
			slideNum:6
		},o);

		this.iNow = 0;
		this.options = settings;
		this.ul = $(".collegeList");
		this.li = this.ul.find("li");
		this.len = this.li.length;
		this.timer = null;
		this.nextok = true;
		this.prevok = false;
		this.bindEvt();
	},

	bindEvt : function(){
		this.setWidth();
		this.auto();
	},

	setWidth : function(){
		var that = this;
		that.oW = this.li.outerWidth(true);
		that.cW = that.target.width();
		this.oneMarginRight = parseInt(this.li.eq(0).css('marginRight'));
		this.rowNum = Math.round((that.cW+this.oneMarginRight) / this.oW);
		this.ul.css({width: this.len * that.oW});  //ul列表宽度为li列表宽度的个数倍
	},

	toggleControl : function(){
		var that = this, $this = that.target,o = that.options;

		//item数量不够轮播
		if(this.oW*this.li.length <= (that.cW+this.oneMarginRight)){
			return;
		}

		if(that.iNow >= that.len - that.rowNum){   //走到最后一步
			that.iNow = that.len - that.rowNum;
			that.nextok = false;
			
			clearInterval(that.timer);

			if(o.delay){
				that.timer=setTimeout(function() {
						that.prev();
				},o.delay);
			}
			
		}else{
			that.nextok = true;     
		}

		if(that.iNow <= 0) {					  //前面已经没有内容  
        	 that.iNow = 0;
        	 that.prevok = false; 
        	clearInterval(that.timer);

			if(o.delay){
				that.timer=setTimeout(function() {
						that.next();
				},o.delay);
			}

        }else{
			that.prevok = true;		
        }		
	},

	auto : function(){
		var that = this, $this = that.target,o = that.options;
		  
		  if(o.delay){
			that.timer=setInterval(function() {
					that.next();
			},o.delay);

			if (o.pause) {
				$this.mouseenter(function() {
					clearInterval(that.timer);
				}).mouseleave(function(){
					clearInterval(that.timer);
					that.timer=setInterval(function(){
						that.next();
					},o.delay);
				});	
			};
		  }
	},

	next : function(){
		this.to(1); 
	},

	prev : function(){
		this.to(-1); 
	},

	to : function(index){
		var that = this, $this = that.target,o = that.options;

		that.toggleControl();

		if(index==1 && that.nextok){
			that.ul.stop(false,true).animate({marginLeft:'-='+o.slideNum*that.oW},function(){
				that.iNow+=o.slideNum;	
				that.toggleControl();
			});		
		 }else if(index==-1 &&that.prevok){
		    that.ul.stop(false,true).animate({marginLeft:0},function(){
		    	that.iNow = 0;
		    	that.toggleControl();
			});			   
	   }
}

};

module.exports = carousel;