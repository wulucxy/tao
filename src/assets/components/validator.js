   var $ = window.$ || require("jquery");

    // 全局对象，可扩展
    var REG = {
      EMAIL : /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/,
      NUMBER: /^\-?(?:[1-9]\d*|0)(?:[.]\d+)?$/,
      TEL : /^1\d{10}$/,
      PASSWORD : /^[a-zA-Z0-9_]{4,20}$/
    };

    function Plugin(t,o){
        this.target=t;
        this.options=o;
        this.init(o);
    }

    Plugin.prototype={ 
      init:function(o){
        var that=this,$this=that.target;
        // 防止浏览器默认校验
        that.novalidate($this);   

        //默认认为input校验通过                    
        that.allPass=true;

        that.unvalidFields=[];

        // 获得所有校验的表单项
        that.items=that.fields(o.identifie,$this);   

        // 表单项验证方法 
        that.validateFields();                      
      },

      novalidate:function($form){
        $form.attr('novalidate') || $form.attr('novalidate', 'true');
        $form.attr("onsubmit","return false;");
      },

      fields:function(identifie, form){
        return $(identifie, form);
      },

      // 校验表单：表单通过时返回 false，不然返回所有出错的对象
      validateForm : function () {
        var that=this;
        $.each(that.items,function(){
            that.validate(this);
        })

        if(!that.allPass){
          return false;
        }else{
          return true;
        }
      },

      onSubmitFn : function(){
        var that=this,$this=that.target,o=that.options;
        // 用户输入实时更新btn状态
        if(!o.onSubmitActive){return;}
        that.allPass = true;

        if(that.validateForm()){
          if($this.find('[type="submit"]').length){
            $this.find('[type="submit"]').removeClass("disabled");
          }
        }
        else{
          if($this.find('[type="submit"]').length){
            $this.find('[type="submit"]').addClass("disabled");
          }
        }
      },

      validateFields:function(){
        var that=this,$this=that.target,o=that.options;
        that.reg= /^radio|checkbox/;

        // 自动校验，更新submit按钮的状态
        if(o.autoValidate){
          that.onSubmitFn();
        }

         // 对每个表单项进行验证
        $.each(that.items,function(index,ele){
          //对radio,checkbox和select应用change，blur方法出发校验
          if(!!that.reg.test(ele.type) || ele.tagName === 'SELECT'){ 
              //change 和 blur 触发表单校验
              $(ele).on('change blur',function(){
                  that.selectTrigger(this);
              });

              //radio和checkbox每次触发change事件改变submit btn状态
              $(ele).on('change',function(){
                  that.onSubmitFn();
              });
          }
          else {
              // 普通input离开即触发校验
              $(ele).on('blur',function(){
                  that.selectTrigger(this);
              });

              //普通input触发keyup事件
              $(ele).on('keyup',function(){
                  that.onSubmitFn();
                });
          }
        })

        // 当用户聚焦到某个表单时去除错误提示
        $this.on('focusin change', o.identifie, function(e) {
          that.removeErrorClass($(this));
          if(o.focusinCallback){
            o.focusinCallback.call(this);
          }
        })

        //当用户每次输入内容时触发keyup事件（如果是checkbox的话就是change）
        $this.on('keyup', o.identifie, function(e) {
          var ele = e.target||e.srcElement;
          if(!that.reg.test(ele.type) && ele.tagName !== 'SELECT'){
            if(o.keyUpCallback){
              o.keyUpCallback.call(this);
            }
          }
        });

        //对checkbox,radio和select处理
        $this.on('change', o.identifie, function(e) {
          var ele = e.target||e.srcElement;
          if(!!that.reg.test(ele.type) || ele.tagName === 'SELECT'){
            if(o.keyUpCallback){
              o.keyUpCallback.call(this);
            }
          }
        })

        // 提交校验
        $this.on('click','[type="submit"]', function(e){
          e.preventDefault();
          if($(this).hasClass('disabled')){return;}

          if(o.autoDisabled){
            $(this).addClass("disabled");
          }

        // 更新所有校验的表单
         that.items=that.fields(o.identifie,$this);   
         
         that.allPass=true;
         that.unvalidFields=[];
           if(!!that.validateForm()){       //如果为true
               if(o.successCallback){
                return o.successCallback.call(this, e);
               }               
               return false;
          }else{                            //如果为false
              if(o.errorCallback){
                o.errorCallback.call(this,that.unvalidFields);
              } 
              return false;
          }                      
        })
      },

      errorElement : function($item){
        var that = this,o = that.options;
        if(!o.errorParent){
          return $item.parent();
        }else{
          return $item.closest(o.errorParent);
        }
      },

      addErrorClass : function($item,klass){
        var that=this,o=that.options;
        that.errorElement($item).addClass(o.klass+' '+klass);
      },

      removeErrorClass : function($item){
        var that=this,o=that.options;
        that.errorElement($item).removeClass(o.klass + ' empty unvalid');
      },

      // 触发相对应的input事件
      selectTrigger : function(ele){
        var that=this;
        that.allPass = true;
        var $items = $(ele);
        if (that.reg.test(ele.type)) {
            $items = $('input[type=' + ele.type + '][name=' + ele.name + ']',$items.closest('form'));
        }
        
        $items.each(function(i,el){
          if (el.disabled || el.type == 'submit' || el.type == 'reset' || el.type == 'file' || el.type == 'image') return;
          that.validate(el);
        })
      },

      // 对输入项进行校验
      validate: function(ele){
          var that=this,
          type = ele.getAttribute("type");
      
          if (type == "radio") {
          // 单选框，只需验证是否必选，同一name单选组只有要一个设置require即可
            var eleRadios=$('input[type=' + ele.type + '][name=' + ele.name + ']'),
                radiopass = false;
            //只要有一个radio被选中，就表示通过验证
            eleRadios.each(function() {
              if(radiopass == false && $(this).prop("checked")) {  
                radiopass = true;
              }
            });
            
            if (radiopass == false) {               //如果没有radio被选中，未通过验证
              that.allPass=false;
              $(ele).data('isPass',false);
              that.unvalidFields.push(ele);
              that.addErrorClass(eleRadios.eq(0),'empty');
            }
          }

          else if (type == "checkbox") {// 复选框，只有要require就验证，木有就不管
            if(!$(ele).get(0).checked){
              var eleBoxs=$('input[type=' + ele.type + '][name=' + ele.name + ']'),
                  checkBoxPass = false;

              eleBoxs.each(function(){
                  if($(this).prop("checked")){
                    checkBoxPass=true;
                  }
              })

              if (checkBoxPass == false) {
                  that.allPass=false;
                  $(ele).data('isPass',false);
                  that.unvalidFields.push(ele);
                  that.addErrorClass(eleBoxs.eq(0),'empty');
              } 
            }
          }
      
          else if (ele.tagName == "SELECT" || ele.tagName == "TEXTAREA") {
            // 下拉框只要关心值
            if(!ele.value){ 
              that.allPass=false;
              $(ele).data('isPass',false);
              that.unvalidFields.push(ele);
              that.addErrorClass($(ele),'empty');
            }
          }
          else if (that.isEmpty(ele)) { // 各种类型文本框以及文本域,排除文本域输入影响
              that.allPass=false;
              $(ele).data('isPass',false);
              that.unvalidFields.push(ele);
              that.addErrorClass($(ele),' empty');
          }
          else if( (!$(ele).attr('noPtnCheck') && $(ele).attr('type') != 'text') || $(ele).attr('pattern')){ //正则表达式验证
              var allPass = that.isRegex(ele);
              if(!allPass){
                that.allPass=false;
                $(ele).data('isPass',false);
                that.unvalidFields.push(ele);
                that.addErrorClass($(ele),'unvalid');
              }else{
                $(ele).data('isPass',true);
              }
           } 
           else if (that.isOverflow(ele)) {    // 最大值最小值, 个数是否超出的验证
              that.allPass=false;
              $(ele).data('isPass',false);
              that.unvalidFields.push(ele);
              that.addErrorClass($(ele),'unvalid');
           }
           else {
            $(ele).data('isPass',true);
          }
      },
      //是否为空判断
      isEmpty : function(ele){
        var empty=0;
        var n=$(ele).val();
        if($.trim(n)==""){
          empty++;
        }
        else if(!!$(ele).attr('placeholder') && $(ele).val()==$(ele).attr('placeholder')){  //ie placeholder兼容
          empty++;
        }
        if(empty==0){
          return false;
        }else return true;
      },

      isRegex: function(ele) {
        // 原始值和处理值
        var inputValue = ele.value,type = ele.getAttribute("type");
        // 获取正则表达式
        var regex = $(ele).attr("pattern") || (function() {
          var matchRegex = REG[type.toUpperCase()];
          if (matchRegex) return matchRegex;
        })();
 
        if(typeof regex == 'string'){
          regex = new RegExp(regex,'i');
        }
        return regex.test(inputValue); 
      },
      isOverflow: function(ele) {
        if (!ele) return false;
        //  大小限制
        var attrMin = $(ele).attr("min"), attrMax = $(ele).attr("max"),
          // 长度限制
            attrDataMin, attrDataMax,
            value = ele.value;
        
        //输入字符长度判断
        if (!attrMin && !attrMax) {
          attrDataMin = $(ele).attr("data-min"), attrDataMax = $(ele).attr("data-max");
          if (attrDataMin && value.length < attrDataMin) {
          } else if (attrDataMax && value.length > attrDataMax) {
          } else {
            return false; 
          }
        } else {
          // 数值大小限制
          value = Number(value);
          if(!REG['NUMBER'].test(value)){
          }
          else if (attrMin && value < attrMin) {
          } else if (attrMax && value > attrMax) {
          }
          else {
            return false; 
          }
        }
        return true;
      }

    };

    $.fn.validator = function(option){
      var instance = $(this).data('validator' );
      var settings=$.extend({
         identifie: '[required]',                       // 需要校验的表单项，（默认是 `[required]`）
         klass: 'error',                                // 校验不通过时错误时添加的 class 名（默认是 `error`）
         errorElement: ".row",                          // 错误出现时添加 klass 的元素
         autoDisabled : false,                          // 是否默认进来就给btn添加disabled类
         onSubmitActive : false,                        // 用户输入实时影响submit btn的状态，默认为false                         
         autoValidate : false,                          // 第一次进来就触发验证,默认false
         focusinCallback : null,                        // focusin回调方法
         keyUpCallback : function(iput){                // input鼠标抬起调用事件        
          return false;
         },
         errorCallback: function(unvalidFields){        // 出错时的 callback，第一个参数是出错的表单项集合
            return false;
         },
         successCallback : function(e){                  // 校验通过的回调方法,e为事件对象
            return false;
         }
      },option);

      this.each(function(index) {
        var me = $(this);   //表单容器本身
          if ( instance ) {
            instance.init();
          }else {
              instance = $(this).data('validator', new Plugin( me,settings ) );
          }
      });
      return instance;
  };