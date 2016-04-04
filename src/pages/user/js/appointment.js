var $ = window.$ || require("jquery");
var extend =  require('object-assign');

var tmpl = require("../templates/appointment.ejs");

//公共方法
var util = require("../../../assets/components/util");

//本地数据库
var localData = require("../../../assets/components/localData");

var tmpl_pay = require("../templates/pay.ejs");

//ping++
var ping = require("../../../assets/components/ping");

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
                    ele.param = extend(ele.param,{
                    	cityName : localData.getCityName(ele.param.city),
                    	courseTypeName : localData.getCourseTypeName(ele.param.courseType)
                    });

                    ele.createTime = util.buildDate(ele.createTime,"yyyy-MM-dd hh:mm:ss");

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

			var orderId = btn.attr("orderid");
			that.orderId = orderId;

			var payList = $.map(res.result,function(ele){
				if(ele.orderId == orderId){
					return ele;
				}
			});

			modalBox(btn,{
				html:tmpl_pay(payList[0]),
				klass : 'w540 shadow',
		        closeByOverlay : false,
		        completeCallback : function(){
		        	$("#payBtn").on("click",function(e){
						e.preventDefault();
						var btn = $(this);
						var channel = $("[name=channel]:checked").val();
						
						that.subPay(btn);
						
					});
		        }
			});
		});

	},
	subPay : function(btn){
		var that = this;

		if(btn.hasClass("disabled")) return;
		btn.addClass("disabled");

		var _data = {
			orderId : that.orderId,
			channel : $("[name=channel]:checked").val()
		};

		$.ajax({
			url : preServer+provinceId+"/pay",
			type : "post",
			contentType: "application/json",
        	data : JSON.stringify(_data),
        	success : function(res){
        		var charge = res.result;
        		if(/alipay/.test(_data.channel)){
        			that.requestAlipay(btn,charge);
        		}

        		btn.removeClass("disabled");

        	},
        	error : function(err){
        		console.log(err);
        		btn.removeClass("disabled");
        	}
		});
	},

	requestAlipay : function(btn,charge){
		var that = this;
		ping.createPayment(charge, function(result, err){
			if(err){
				warn(err.msg);
			}
		});
	}
};