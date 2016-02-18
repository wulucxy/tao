var $ = window.$ || require("jquery");

var fav = {
	init : function(){
		this.province = $("[name=province]").val();
		//选择条件
		this.toggle();
	},


	toggle : function(){
		var that = this;
    	$(".btn-fav").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");

    		var type = btn.data("favtype");
    		that.requestFavStatus.call(that,btn,type);
    	});
    },

    requestFavStatus : function(btn,type){
    	var that = this;
    	//收藏院校
    	if(type == 1 && !btn.hasClass("faved")){
    		that.addFavCollege(btn,type);
    	}else if(type == 1 && btn.hasClass("faved")){
    		that.removeFavCollege(btn,type);
    	}

    },

    addFavCollege : function(btn,type){
    	var that = this;
    	$.ajax({
    			url : that.province+"/profile/favor/college/add",
    			type : "post",
    			data : {collegeId : $("[name=college]").val(),favorType : type},
    			success : function(res){
    				if(typeof res == "string"){
    					var res = $.parseJSON(res);
    				}

    				if(res.code==200){
    					btn.addClass("faved");
    					$("[name=favorId]").val(res.favorId);
    				}
    			}
    		});
    },

    removeFavCollege : function(btn,type){
    	var that = this;
    	$.ajax({
    			url : that.province+"/profile/favor/college/delete",
    			type : "post",
    			data : {favorId : $("[name=favorId]").val()},
    			success : function(res){
    				if(typeof res == "string"){
    					var res = $.parseJSON(res);
    				}

    				if(res.code==200){
    					btn.removeClass("faved");
    					$("[name=favorId]").val("");
    				}
    			}
    		});
    }


};

module.exports = fav;