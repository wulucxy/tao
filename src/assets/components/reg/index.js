var $ = window.$ || require("jquery");

var modalBox = require("../modalBox");

// 去除缓存
delete require.cache[require.resolve("../login/")];
var login = require("../login/");

require("../validator");

var tmpl = require("./tmpl.ejs");

var reg = {
	init : function(){
		var that = this;
		$("#reg").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			that.Box(btn);
		});
	},

	Box : function(btn){
		modalBox( btn.get(0), {
	        html:tmpl({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){ 
	        	var self = btn; 
	        	//去注册
	        	$("#m_goLogin").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(self).data("modalBox")._close(true);

	        		setTimeout(function(){
	        			login.Box(btn);
	        		},400);

	        	});
	        }
	    });	
	}
};


module.exports = reg;