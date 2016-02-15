var $ = window.$ || require("jquery");

var mNav = {
	init : function(){
		//选择条件
		this.toggleMore();

	},


	toggleMore : function(){
    	$(document).on("click","[data-action=toggle]",function(){
    		$(this).closest(".row").toggleClass("expand-mode");
    	});

    }


};

module.exports = mNav;