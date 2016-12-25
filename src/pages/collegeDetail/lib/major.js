var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/v2/major.ejs");

var major = {
	init : function(o){
		 //保存分页对象
        this.pager = 1;

        this.collegeId = $("[name=collegeId]").val();
        this.province = $("[name=province]").val();

        this.capacity = 10;
		//this.requestData();
		this.bindEvt();
	},

	requestData : function(btn){
		var that = this;
		var _data = {
			capacity : that.capacity,
			province : $("[name=studentProvince]").val(),
			year : $("[name=year]").val(),
			batch : $("[name=batch]").val(),
			collegeId : that.collegeId
		};

		that.pager = that.pager || 1;

		_data.page = that.pager;

		$.ajax({
			url : preServer+that.province + "/data/college/"+that.collegeId+"/majors",
			type : "post",
			contentType: "application/json",
			data : JSON.stringify(_data),
			success : function(res){
				if(typeof res == "string"){
					var res = $.parseJSON(res);
				}

				if(res.code!=1){
					warn(res.msg);
					return;
				}

				
				that.insertData(btn,res.result,that.pager);
			}
		});
	},

	insertData : function(btn,res,pager){

		var that = this;
		var _html = tmpl(res);

		if(pager == 1){
			$(".majorLists").empty().html(_html);
		}else{
			$(".majorLists").append(_html);
		}

		$(".btn-loading").removeClass("loading disabled");

		var pageCount = Math.ceil(res.total / that.capacity);
		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
            $(".btn-loading").removeClass("loading-all");
        }

		//如果是点击加载更多，页码++
        that.pager++;
	},

	bindEvt : function(){
		var that = this;

		$(".trigger").on("change",function(){
			var _data = {
				province : $("[name=studentProvince]").val(),
				year : $("[name=year]").val(),
				batch : $("[name=batch]").val()
			};

			that.pager = 1;

		
			that.requestData();
		});

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