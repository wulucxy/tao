var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var tmpl = require("../templates/major.ejs");

var major = {
	init : function(o){
		 //保存分页对象
        this.pageObject = {};

        this.collegeId = $("[name=collegeId]").val();
        this.province = $("[name=province]").val();

		//this.requestData();
		this.bindEvt();
	},

	requestData : function(btn){
		var that = this;
		var _data = {
			province : $("[name=province]").val(),
			year : $("[name=year]").val(),
			courseType : $("[name=courseType]").val(),
			collegeId : that.collegeId
		};

		var _key = _data.province + _data.collegeType + _data.year;
		_data.page = that.pageObject[_key];

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

				//如果是点击加载更多，页码++，否则重置为1
                if(btn){
                    that.pageObject[_key]++;
                }else{
                    that.pageObject[_key] = 1;
                }

				that.insertData(res,that.pageObject[_key]);
			}
		});
	},

	insertData : function(res,pager){
		var that = this;
		var _html = tmpl(res);

		if(pager == 1){
			$(".majorLists").empty().html(_html);
		}else{
			$(".majorLists").append(_html);
		}

		$(".btn-loading").removeClass("loading disabled");

		//最后一页
		if(pager > res.count){
			$(".btn-loading").addClass("loading-all");
		};
	},

	bindEvt : function(){
		var that = this;

		$(".trigger").on("change",function(){
			var _data = {
				province : $("[name=province]").val(),
				year : $("[name=year]").val(),
				courseType : $("[name=courseType]").val()
			};

			var _key = _data.province + _data.collegeType + _data.year;
			that.pageObject[_key] = 1;
			that.requestData();
		});

		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.requestData(btn);
    	});

		$(".trigger").trigger("change");

	}


};

module.exports = major;