var $ = window.$ || require("jquery");

// md5处理
var CryptoJS = require('crypto-js');

module.exports = {
	encrypt: function(pwd) {
      return CryptoJS.MD5(pwd).toString(CryptoJS.enc.Base64);
    },

	//控制公共表单错误展示和隐藏
	hideError: function(obj, txt) {
      var errortxt = txt || '';
      obj.html(errortxt).css({
        'visibility': 'hidden'
      });
    },
    showError: function(obj, txt) {
      var errortxt = txt || obj.html();
      obj.html(errortxt).css({
        'visibility': 'visible'
      });
    },

    showErrorMsg: function(oForm, oError, unvalidFields) {
      var that = this;
      oForm.find(".row").removeClass('errorIpt');

      $.each(unvalidFields, function(index, ele) {
        var $formGroup = $(ele).closest('.row');
        if ($formGroup.length) {
          $formGroup.addClass('errorIpt');

          if ($formGroup.hasClass('empty')) {
            var errorTxt = $formGroup.find(".p-error-empty").text();
          } else if ($formGroup.hasClass('unvalid')) {
            var errorTxt = $formGroup.find(".p-error").text();
          }
        }

        that.showError(oError, errorTxt);
        return false;
      });

    }
};