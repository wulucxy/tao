var $ = window.$ || require("jquery");

var checkBox = {

  render: function(){
    if($('.label_check input').length) {
        $('.label_check').each(function(){
            $(this).removeClass('c_on');
        });

        $('.label_check input').map(function(idx,ele){
            if($(ele).is(":checked")){
              return ele;
            }
        }).each(function(){
            $(this).parent('label').addClass('c_on');
        });
    };
  },

  init: function(){
    this.render();
    this.bindEvt();
  },

  getCheckListValue: function(){
    var checkList = [];
    $('[name=subject]').filter(function(idx,ele) {
      if(ele.checked){
        checkList.push(ele.value);
      }
    })

    return checkList;
  },

  bindEvt: function(){
    var labelLists = this.getCheckListValue();
    $(document).on('click','.label_check input',function(e) {

      var $item = $(e.target);

      if($item.prop('checked')) {
        labelLists.push($item.val())
      }else {
        var startIndex = labelLists.indexOf($item.val())
        labelLists.splice(startIndex,1);
      }

      if(labelLists.length > 3) {
        labelLists.shift();
      }

      $('.label_check').each(function(){
          $(this).removeClass('c_on');
          $(this).find('input').attr('checked', false);
      });

      $('.label_check input').map(function(idx,ele){

          var _value = String(ele.value);

          if(labelLists.indexOf(_value) > "-1") {
            ele.checked = true;
            $(ele).parent('label').addClass('c_on')
          }
      })

    });
  }
};

module.exports = checkBox;