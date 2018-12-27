var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/coupon.ejs");

//公共方法
var util = require("../../../assets/components/util");

var provinceId = $("[name=province]").val();

module.exports = {
	init : function(o){
    	//默认分页开始
		this.pager = 1;
		this.capacity = 10;
    	this.tmpl = tmpl;
    	this.options = extend({

    	},o);

    	this.target = $(o.ele);

		this.bindEvt();
		this.fetch();
	},

	fetch : function(btn){
		var that = this,o = that.options,$this = that.target;

		//如果是点击加载更多，页码++，否则重置为1
        if(btn && $(btn).hasClass("btn-loading")){
            that.pager++;
        }else{
            that.pager = 1;
        }

		var parmData = {
			page: that.pager,
			capacity: that.capacity
		};

		$.ajax({
			url : o.url,
			type : 'post',
			data: JSON.stringify(parmData),
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                var couponList = res.result.couponList;
                
                 $.each(couponList,function(idx,ele){
                    ele.availableTime = util.formatDate(ele.activeTime,"yyyy-MM-dd");
                });

                that.loadList(res.result,that.pager);
			}
		});
	},

	loadList : function(data,pager){
		var that = this,o = that.options;
		var _html = that.tmpl(data);

		if(pager == 1){
			$("#couponWrapper").empty().html(_html);
		}else{
			$("#couponWrapper").append(_html);
		}


		if(pager == 1 && data.total == 0){
			$(".btn-loading").hide();
		}else{
			$(".btn-loading").show();
			$(".btn-loading").removeClass("loading disabled");
		}

		var pageCount = Math.ceil(data.total / that.capacity);

		//最后一页
		if(pager >= pageCount){
			$(".btn-loading").addClass("loading-all");
		}else{
            $(".btn-loading").removeClass("loading-all");
        }
	},

	bindEvt : function(){
		var that = this;
		$(".btn-loading").on("click",function(e){
    		e.preventDefault();
    		var btn = $(this).closest(".btn");
    		if(btn.hasClass("disabled") || btn.hasClass("loading-all")) return;
    		btn.addClass("disabled loading");
    		that.fetch(btn);
    	});
	}

};