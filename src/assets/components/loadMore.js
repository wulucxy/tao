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
    	that.pager = 1;

    	//模板地址
    	that.tmpl = o.tmpl;
    	that.btn = $(".btn-loading");

    	if(Object.prototype.toString.call(that.tmpl) != '[object Function]'){
    		return;
    	}

    	that.btn.on("click",function(e){
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
			url : $this.data("url"),
			type : "post",
			data : {pager : that.pager},
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
		console.log(that.tmpl(res));
		return that.tmpl(res);
	},

	insertData : function(res){
		var that = this,$this = that.target;

		if(!!res){
			var _html = that.renderData(res);
			console.log(_html);
			if(that.pager == 1){
				$this.empty().append(_html);
			}else{
				$this.append(_html);
			}

			that.pager++;

			//最后一页
			if(that.pager > res.pageCount){
				that.btn.addClass("loading-all");
			};

		}else{
			that.target.html('<p class="no_transList"><i class="noListIcon"></i><em class="vm">暂无记录</em></p>');
		}


		that.btn.removeClass("loading disabled");
	}
};

 var loadMore = function(target,o){
 	var settings=extend({
		button : ".btn-loading",
		callback : null
	},o);

	return $(target).each(function(index) {
		var me = $(this);  
		return new Plugin(me,settings);
	});
 };

 module.exports = loadMore;