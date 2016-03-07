var $ = window.$ || require("jquery");
var extend =  require('object-assign');

  function Plugin(t,o){
		this.target=t;
		this.options=o;
	    this.pages = o.pages ? o.pages : Math.ceil(o.items / o.itemsOnPage);  //总页数
		this.currentPage = o.currentPage - 1;                                 //当前页，默认为0
		o.halfDisplayed = o.displayedPages / 2;                               //活动页的一半
		this.init(this.options);
  }
 
  Plugin.prototype = {

  	destroy : function(){
  	  this.target.empty();
  	},

  	draw : function(){
  	  var that = this,o = that.options;
  	  that.destroy();
  	  that.interval = that._getInterval();
  	  that.panel = that.target;
  	  if (o.prevText) {			
		that._appendItem(that.currentPage - 1, {text: o.prevText, classes: 'prev'});
	  }

	  if (that.interval.start > 0 && o.edges > 0) {				// 边缘按钮
		var end = Math.min(o.edges, that.interval.start);
		for (i = 0; i < end; i++) {                            // left
			that._appendItem(i);
		}
		
		if (o.edges < that.interval.start && (that.interval.start - o.edges != 1)) {     //区分是否可点击中间按钮
			that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
		} else if (that.interval.start - o.edges == 1) {
			that._appendItem(o.edges);
		}
	 }

	for (i = that.interval.start; i < that.interval.end; i++) {      // Generate interval links
		that._appendItem(i);
	}

	if (that.interval.end < o.pages && o.edges > 0) {                    // Generate end edges
		if (o.pages - o.edges > that.interval.end && (o.pages - o.edges - that.interval.end != 1)) {
			that.panel.append('<span class="ellipse disabled">' + o.ellipseText + '</span>');
		} else if (o.pages - o.edges - that.interval.end == 1) {
			that._appendItem(that.interval.end++);
		}
		var begin = Math.max(o.pages - o.edges, that.interval.end);   //从end往后
		for (i = begin; i < o.pages; i++) {
			that._appendItem(i);
		}
	}

	if (o.nextText) {
		that._appendItem(this.currentPage + 1, {text: o.nextText, classes: 'next'});
	}

  	},

  	_appendItem: function(pageIndex, opts) {
  		var that = this,o = that.options,$link;
		pageIndex = pageIndex < 0 ? 0 : (pageIndex < this.pages ? pageIndex : this.pages - 1);
		var options = $.extend({
			text: pageIndex + 1,
			classes: ''
		}, opts);

		if (pageIndex == that.currentPage) {
			$link = $('<span class="currentPage">' + (options.text) + '</span>');
		} else {
			$link = $('<a href="' + o.hrefTextPrefix + (pageIndex + 1) + '">' + (options.text) + '</a>');
			$link.on('click',function(){
				that._selectPage(pageIndex);
				return false;
			});
		}
		if (options.classes) {
			$link.addClass(options.classes);
		}

		that.panel.append($link);
	},

	_selectPage : function(pageIndex){
		var that = this,o = that.options;
		that.currentPage = pageIndex;
		if (o.selectOnClick) {
			that.draw();
		}
		 o.onPageClick.call(that,pageIndex + 1);
	},

  	_getInterval : function(){
  	  var that = this,o = that.options;
  	  return {
		start: Math.ceil(that.currentPage > o.halfDisplayed ? Math.max(Math.min(that.currentPage - o.halfDisplayed, (o.pages - o.displayedPages)), 0) : 0),
		end: Math.ceil(that.currentPage > o.halfDisplayed ? Math.min(that.currentPage + o.halfDisplayed, o.pages) : Math.min(o.displayedPages, o.pages))
	  };
  	},


  	init : function(o){
	  var that = this, $this = that.target;
	  if(that.options.onInit){
	  	 that.options.onInit.call(that);
	  }
	  that.draw();
	}

  };

		
var pagination = function(target,o) {
	var instance = $.data( $(target), 'pagination' );
	var settings=extend({
		items: 1,                  //分页条目数
		itemsOnPage: 1,            //每页显示item条数
		pages: 0,                  //手动指定分页数（如果指定此项就不需要以上两个参数）
		displayedPages: 5,         //中间活动页数
		edges: 2,                  //边缘显示页数
		currentPage: 1,            //当前页数
		hrefTextPrefix: '#page-',
		hrefTextSuffix: '',
		prevText: '&lt;',
		nextText: '&gt;',
		ellipseText: '&hellip;',
		cssStyle: 'light-theme',
		selectOnClick: true,
		onPageClick: function(pageNumber) {
		},
		onInit: function() {
		}
	},o);

	
	$(target).each(function(index) {
		var me = $(this);  
		if ( instance ) {
          instance.init();
        }else {
            instance = $.data( this, 'pagination', new Plugin( me,settings ) );
        }
	});
	return instance;
};	

module.exports = pagination;