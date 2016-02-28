var $ = window.$ || require("jquery");
var extend =  require('object-assign');
 
function Plugin(t,o){
		this.target=t;
		this.options=o;
		this.init(this.options);
	   }
  
Plugin.prototype = {
   	init : function(o){
    	var that = this,$this = that.target;
    	// 分页默认从第1页开始
    	that.pager = o.pager;

    	//模板地址
    	that.tmpl = o.tmpl;
    	that.btn = that.target.closest(".content").find(".btn-loading");

    	if(Object.prototype.toString.call(that.tmpl) != '[object Function]'){
    		return;
    	}

    	that.btn.off().on("click",function(e){
    		console.log("btn is clicked");
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.fetch.call(that);
    	});
	},

	fetch : function(){
		var that = this,o = that.options,$this = that.target;
		$.ajax({
			url : o.url || $this.data("url"),
			type : "post",
			data : {page : that.pager},
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                that.insertData.call(that,res);
			}
		});
	},

	renderData : function(res){
		var that = this;
		return that.tmpl(res);
	},

	insertData : function(res){
		var that = this,$this = that.target,o = that.options;
		if(res[o.listAttr].length){
			var _html = that.renderData(res);
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}

			that.pager++;

			//最后一页
			if(that.pager > res.count){
				that.btn.addClass("loading-all");
			};

		}else{
			that.target.html('<div class="no_transList"><p class="tc mb10"><i class="noListIcon"></i></p><em class="g9">暂无数据</em></div>');
			$(".btn-loading").length && $(".btn-loading").hide();
		}


		that.btn.removeClass("loading disabled");
	}
};

 var loadMore = function(target,o){
 	var settings=extend({
 		url : "",
 		pager : 1,
		button : ".btn-loading",
		callback : null,
		listAttr : ""
	},o);

	return $(target).each(function(index) {
		var me = $(this);  
		return new Plugin(me,settings);
	});
 };

 module.exports = loadMore;