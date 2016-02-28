var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/school.ejs");

var major = {
	init : function(o){
		
        this.majorId = $("[name=majorId]").val();
        this.province = $("[name=province]").val();
        this.pager = 1;

		//this.requestData();
		this.bindEvt();
	},

	requestData : function(btn){
		var that = this;
		var _data = {
			province : that.province,
			majorId : that.majorId,
			page : that.pager
		};

		$.ajax({
			url : that.province + "/data/major/college",
			type : "post",
			data : _data,
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				//如果是点击加载更多，页码++，否则重置为1
                if(btn){
                    that.pager++;
                }else{
                    that.pager = 1;
                }

				that.insertData(res,that.pager);
			}
		});
	},

	insertData : function(res,pager){
		var that = this;
		var _html = tmpl(res);

		if(pager == 1){
			$(".schoolList").empty().html(_html);
		}else{
			$(".schoolList").append(_html);
		}

		$(".btn-loading").removeClass("loading disabled");

		//最后一页
		if(pager > res.count){
			$(".btn-loading").addClass("loading-all");
		};
	},

	bindEvt : function(){
		var that = this;

		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});

		$(".btn-loading").trigger("click");

	}
};

module.exports = major;