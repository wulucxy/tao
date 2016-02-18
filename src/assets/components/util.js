var $ = window.$ || require("jquery");

var util = {
	// 1.格式化相关
	leadingZero : function(num){
        return (num < 10 ? '0' : '') + num;
    },

    randomRange:function(low, high){
		return (Math.random() * (high - low)) + low;
	},

    //格式化时间
    formatTime : function(data,format){
        var that = this;
        return new Date(Date.parse(data.replace(/-/g,  "/"))).format(format);
    },

    //字符串转时间
    str2Date : function(s){
        return new Date(Date.parse(s.replace(/-/g,  "/")));  
    },

    // 格式化银行卡
	formatBankCard : function(card){  
		var val = card,
			out = val.match(/\d{1,4}/g);
		out = out ? out.join(' ') : '';
		return out;
	},
	// 格式化个人身份证号
	formatPersonCard : function (text){
		// 身份证格式处理
		var out = text.replace(/\s*/g, '').match(/^(\d{1,6})(\d{1,8})?(\d{1,4}|\d{1,3}X|\d{1,3}x)?$/);
		// 处理格式化的数据
		out = out ? out.slice(1).join(' ') : '';
		// 去除空格
		out = out.replace(/(^\s*)|(\s*$)/g, '');

		return out;
	},
	// 格式化手机号
	formatTel : function (num){
		var out = String(num).match(/^(\d{1,3})(\d{1,4})(\d{1,4})$/);
		// 处理格式化的数据
		out = out ? out.slice(1).join(' ') : '';
		return out;
	},
	
	normByFormat : function(date){
	    return {
	       'yyyy': date.getFullYear(),
	       'yy': date.getFullYear().toString().slice(-2),
	       'MM': date.getMonth() + 1,
	       'dd': date.getDate(),
	       'hh': date.getHours(),
	       'mm': date.getMinutes(),
	       'ss': date.getSeconds()
	    }
	},
	//日期格式化,第一个参数为日期类型，第二个参数为yyy，yy,MM,dd,hh,mm,ss的组合
	formatDate : function(date,type){
		var norm = this.normByFormat(date);
	    return type.replace(/([a-z]+)/ig, function(n){
	        return (typeof norm[n] !="undefined" ? (norm[n] < 10 ? '0' + norm[n] : norm[n]) : n);
	    });
	},
	thousand : function(num,splitter){
		if(typeof Number(num) != "number") return;

		var splitter = splitter || ",";

		var str = String(num),
        str1 = str.split(".")[0],
        str2 = str.split(".")[1];

	    var iNum = str1.length % 3,
	        prev = '',
	        arr = [],
	        iNow = 0,
	        tmp = '';

	    if(iNum != 0){
	        prev = str1.substring(0, iNum);
	        arr.push(prev);
	    }
	    str1 = str1.substring(iNum);

	    for(var i=0; i<str1.length; i++){
	        iNow++;
	        tmp += str1.charAt(i);
	        if(iNow==3 && tmp){
	            arr.push(tmp);
	            tmp = '';
	            iNow = 0;
	        }
	    }

	    if(str2){
	      return arr.join(splitter)+"."+str2;
	    }else
	    return arr.join(splitter);
	},

	// 2.dom操作
	setupLabel : function(){
		var that = this;
      if($('.label_check input').length) {
          $('.label_check').each(function(){
              $(this).removeClass('c_on');
          });

          console.log($('.label_check input'));

          $('.label_check input:checked').each(function(){
              $(this).parent('label').addClass('c_on');
          });
      };
      if($('.label_radio input').length) {
          $('.label_radio').each(function(){
              $(this).removeClass('c_on');
          });
          $('.label_radio input:checked').each(function(){
              $(this).parent('label').addClass('c_on');
          });
      };

      $(".label_radio,.label_check").on("change",that.setupLabel);
  },

  debounce : function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)      
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
    },

    count : function(oCount,t,callback){
       var timer = null;

       var countdown = function () { 
            if (t < 0) {                   //倒计时结束
                clearInterval(timer);
                if(callback){callback();}
            } else {
                oCount.html(t);   
            }
            t--;
        };
        countdown();
        timer = setInterval(countdown, 1000); 
    },

    //3.表单操作
    post : function(url, fields,isBlank) {
      var $form = $('<form>', {
          action: url,
          method: 'post'
      });

      if(isBlank){
        $form.attr("target","_blank");
      }
      
      $.each(fields, function(key, val) {
          $('<input>',{
              type: "hidden",
              name: key,
              value: val
          }).appendTo($form);
      });

      $form.submit();
  },

  //4.uri操作
  //updateQueryString('http://www.wacai.com/xxx.action?class_id=3&id=2','class_id',11);
    updateQueryString : function (uri, key, value) {
          var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
          var separator = uri.indexOf('?') !== -1 ? "&" : "?";
          if (uri.match(re)) {
            return uri.replace(re, '$1' + key + "=" + value + '$2');
          }
          else {
            return uri + separator + key + "=" + value;
          }
    },
    
    removeURLParameter : function(url, parameter) {
        var urlparts= url.split('?');   
        if (urlparts.length>=2) {

            var prefix= encodeURIComponent(parameter)+'=';
            var pars= urlparts[1].split(/[&;]/g);

            //反向遍历
            for (var i= pars.length; i-- > 0;) {    
                // string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
                    pars.splice(i, 1);
                }
            }

            url= urlparts[0]+'?'+pars.join('&');
            return url;
        } else {
            return url;
        }
    },

    getQuery : function(name){
        var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
        if(result == null || result.length < 1){
            return "";
        }
        return result[1];
    },
    
    serialize : function (data) {
        if (!Object.keys) Object.keys = function(o) {
          if (o !== Object(o))
            throw new TypeError('Object.keys called on a non-object');
          var k=[],p;
          for (p in o) if (Object.prototype.hasOwnProperty.call(o,p)) k.push(p);
          return k;
        }
		return Object.keys(data).map(function (key) {
			return key + '=' + data[key];
		}).join('&');
	}
};

module.exports = util;