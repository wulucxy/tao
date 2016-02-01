var $ = window.$ || require("jquery");

var modalBox = require("../modalBox");
require("../validator");

// 去除缓存
delete require.cache[require.resolve("../login/")];
var login = require("../login/");


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
	        	//去注册
	        	$("#m_goLogin").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(".btn-close").trigger("click");

	        		setTimeout(function(){
	        			login.Box(btn);
	        		},400);

	        	});
	        }
	    });
		
		
	}


};


module.exports = reg;