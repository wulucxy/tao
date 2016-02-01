var $ = window.$ || require("jquery");

var modalBox = require("../modalBox");
require("../validator");

var tmpl_login = require("./tmpl.ejs");

if(!window.mReg){
	window.mReg = require("../reg");	
}

if(!window.mForget){
	window.mForget = require("../forgetPw");	
}

var login = {
	init : function(){
		var that = this;
		$("#login").on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);
			that.Box(btn);
		});
	},

	Box : function(btn){
		modalBox( btn.get(0), {
	        html:tmpl_login({}),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        completeCallback : function(){ 
	        	//去注册
	        	$("#m_goReg").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(".btn-close").trigger("click");

	        		setTimeout(function(){
	        			mReg.Box(btn);
	        		},400);

	        	});

	        	//忘记密码
	        	$("#m_goForgetPw").on("click",function(e){
	        		e.preventDefault();
	        		var btn = $(this);
	        		$(".btn-close").trigger("click");

	        		setTimeout(function(){
	        			mForget.Box(btn);
	        		},400);

	        	});
	        }
	    });
	}
};


module.exports = login;