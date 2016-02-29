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
    		that.removeFav(btn,type);
    	}

        //收藏专业
        if(type == 2 && !btn.hasClass("faved")){
            that.addFavMajor(btn,type);
        }else if(type == 2 && btn.hasClass("faved")){
            that.removeFav(btn,type);
        }

    },

    addFavMajor : function(btn,type){
        var that = this;
        $.ajax({
                url : "/v2/client/"+that.province+"/profile/favor/major/add",
                type : "post",
                contentType: "application/json",
                data : JSON.stringify({collegeId : $("[name=majorId]").val(),favorType : type}),
                success : function(res){
                    if(typeof res == "string"){
                        var res = $.parseJSON(res);
                    }

                    if(!res.code){
                        btn.addClass("faved");
                        $("[name=favorId]").val(res.favorId);
                    }
                }
            });
    },

    addFavCollege : function(btn,type){
    	var that = this;
    	$.ajax({
    			url : "/v2/client/"+that.province+"/profile/favor/college/add",
    			type : "post",
                contentType: "application/json",
    			data : JSON.stringIfy({collegeId : $("[name=college]").val(),favorType : type}),
    			success : function(res){
    				if(typeof res == "string"){
    					var res = $.parseJSON(res);
    				}

    				if(!res.code){
    					btn.addClass("faved");
    					$("[name=favorId]").val(res.favorId);
    				}
    			}
    		});
    },

    removeFav : function(btn,type){
    	var that = this;
    	$.ajax({
    			url : "/v2/client/"+that.province+"/profile/favor/delete",
    			type : "post",
                contentType: "application/json",
    			data : JSON.stringify({favorId : $("[name=favorId]").val()}),
    			success : function(res){
    				if(typeof res == "string"){
    					var res = $.parseJSON(res);
    				}

    				if(!res.code){
    					btn.removeClass("faved");
    					$("[name=favorId]").val("");
    				}
    			}
    		});
    }


};

module.exports = fav;