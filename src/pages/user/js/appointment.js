var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/appointment.ejs");

//公共方法
var util = require("../../../assets/components/util");


var payModal = require("../../../assets/components/payModal");
//本地数据库
var localData = require("../../../assets/components/localData");

var provinceId = $("[name=province]").val();

module.exports = {
	init : function(o){
		// 分页默认从第1页开始
    	this.pager = 1;
    	this.tmpl = tmpl;


    	this.options = extend({

    	},o);

    	this.target = $(o.ele);

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this;
		

		that.fetch.call(that);
	},

	fetch : function(){
		var that = this,o = that.options,$this = that.target;

		var parm = [];

		$.ajax({
			url : o.url,
			type : o.type,
			contentType: "application/json",
			success : function(res){
				if(typeof(res) == 'string'){
                   var res = $.parseJSON(res);
                }

                res.appointments = res.result;
                
                //if(!res.appointments.length) return;

                 $.each(res.appointments,function(idx,ele){
                	//获取city名称
                    ele.param = extend(ele,{
                    	cityName : localData.getCityName(ele.city)
                    	// courseTypeName : localData.getCourseTypeName(ele.param.courseType)
                    });

                    ele.createTime = util.formatDate(ele.createTime,"yyyy-MM-dd hh:mm:ss");
                    if(ele.price){
                    	ele.price = Math.floor(ele.price*100)/10000;
                    }
                });

                that.insertData.call(that,res);
			}
		});
	},

	renderData : function(res){
		var that = this;
		return that.tmpl(res);
	},

	insertData : function(res){
		var that = this,$this = that.target,o = that.options;

		var _html = that.renderData(res);

		if(that.pager == 1){
			$this.empty().append(_html);
		}else{
			$this.append(_html);
		}

		that.appointEvt(res);
	},

	appointEvt : function(res){
		var that = this;


		$('.btn-pay').on("click",function(e){
			e.preventDefault();
			var btn = $(e.target);

			if(btn.hasClass('disabled')) return;
			btn.addClass('disabled');

			var orderId = btn.attr("orderid");
			that.orderId = orderId;

			var payList = $.map(res.result,function(ele){
				if(ele.orderId == orderId){
					return ele;
				}
			});

			payModal.init(btn, {
				planType: 2,
				provinceId: provinceId,
				price: btn.attr('price'),
				orderId:  btn.attr('orderid'),
				appointmentType: btn.attr('appointmenttype')
			});
		});
	}
};