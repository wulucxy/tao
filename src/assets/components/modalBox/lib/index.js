var $ = window.$ || require("jquery");
var extend =  require('object-assign');
var browser = require("../../browser");


var mb='modalBox';

var modalBox = function(target,options){

    function Plugin(element,options){
       this.element = element;
       this.options=options;
       this.closed=true;
       this.timer=null;
       this.closeTimer=null;
       this.init(options);
    }    

    Plugin.prototype = {
        build : function(){
            var that = this,o=that.options; 
            if(o.html){
                that.create($(o.html));
            }else if(!!o.url && typeof o.url === 'string'){  //如果存在文本url地址
                 if ( o.url.charAt(0) === '#' || o.url.charAt(0) === '.' ){  //id选择器或者class选择器
                    if($(o.url).length){        //类或id选择器元素存在
                        that.create($(o.url).clone(true));
                    }else{                      //类或id选择器元素不存在 error
                        that.create();
                    }               
                  }else{                        //ajax url地址
                      that.ajax();  
                  }                     
            }
            else {that.create();}       
        },

        ajax : function(){
            var that = this, o=that.options;    
             $.ajax({
                    url: o.url,
                    data :o.data || {},
                    type: 'POST',
                    success : function(data){
                        var jsonData = JSON.parse(data);
                        if(!!jsonData){
                            var modal= $('<div/>', {
                                'id': mb + '-ajax',
                                'html': data
                            });
                        }
                        else{
                            var modal = $('<div/>', {
                                'id': mb + o.error,
                                'html': o.error
                            });  
                        }
                         that.create(modal);
                    },
                    error : function(){}
             });
        },

        effect : function(){
            var that = this, o=that.options;
            var effect = mb + '-' + o.effect;
            return effect;
        },

        geneRateContent : function(){
            var that = this, o=that.options;    

            var core='<div id="modalBox" class="modalBox" ><div id="modalBox-content" class="modalBox-content"></div></div>';
            $(document.body).prepend(core);
            
            if ( o.overlay && !!that.closed) {
                that.closed=false;
                that._overlay();            //overlay背景
            }  
            
            that.container=$('#modalBox');
            that.content=$('#modalBox-content');
            
            var effect=that.effect();
            that.container.addClass(effect);
        },

        _overlay : function(){
            var that = this, o=that.options;
            var w=$(window).width(),h=$(document).height();
            if(!$('#modalBox-overlay').length){
                var overlay= $('<div/>', {
                                'id': 'modalBox-overlay',
                                'class': "modalBox-overlay"
                            }).css({'zIndex':o.zIndex-2,
                                    'width':w,
                                     'height':h,
                                    'background':o.overlayBg}).appendTo(document.body)
            }

             that.overlay=$('#modalBox-overlay');
            
        }, 

        _listener : function(){
            var that = this, o=that.options;
            if(!!o.closeBtn && typeof o.closeBtn==='string' && !!$(o.closeBtn).length){
                $(o.closeBtn).off().on('click',$.proxy(that._close,that));   
            }
            that.overlay.off().on('click',function(e){
                if(o.closeByOverlay){
                    that._close();
                }
                return false;
            });
            
            if(o.customCallback){
                o.customCallback.call(that);
            }
        },

        _close : function(bool){                                //overlay关闭方法
            var that = this, o=that.options;
            clearTimeout(that.closeTimer);
            if(o.beforeCloseCallback){
                o.beforeCloseCallback.call(that);
            }
            that.closeTimer=setTimeout( function () {
                that.container.removeClass('modalBox-show');
                that.container.remove();

                if ( o.overlay && typeof bool != 'boolean' ){
                    that.overlay.remove();
                    that.closed=true;
                }

                if ( o.closeCallback ) {
                    o.closeCallback.call(that);
                }

            }, o.speed);
        },

        create : function(modal){
            var that = this,o=that.options;
            if ( typeof modal === 'undefined' ) {       //error
            var modal= $('<div/>', {
                            'id': mb + o.error,
                            'html': o.error
                        });
            }
            that.modal = modal;

            if(!!that.closed){
                that.geneRateContent();
                modal.show().appendTo(that.content);
                if(o.startCallback){
                    o.startCallback.call(that,modal);
                }   
                //获取临时宽高
                var _temp_html = $('<div class="abs">').append(that.content.clone(true));
                $("body").append(_temp_html);

                var tmpSize = {
                    width:  parseInt(o.width, 0) || _temp_html.width(),
                    height: _temp_html.height()
                };

                _temp_html.remove();

                modal.css({width:tmpSize.width});
                
                if(o.klass){
                    that.container.addClass(o.klass);
                }
                if(browser.isModernBrower){
                    that.container.addClass('trans50')
                }else{
                    that.container.css({'marginLeft':-that.container.width()/2,'marginTop':-tmpSize.height/2})
                }   
            }
            that.container.css({'zIndex':o.zIndex});

            //windows 下一像素高度导致弹窗字体模糊
            if(that.container.get(0).offsetHeight % 2 != 0){
                var pb = that.container.css("padding-bottom");
                that.container.css("paddingBottom",parseInt(pb)+1);
            }
            
            clearTimeout(that.timer);
            that.timer=setTimeout( function () {
                that.container.addClass('modalBox-show').find(that.content).addClass('animTime bounceIn');
                that.overlay.addClass('show');
                that._listener();
                setTimeout( function () {
                    if ( o.completeCallback ) {
                        o.completeCallback.call(that);
                    }
                }, o.speed );
            }, 100);
        },

        init : function(o){
            var that = this;
            this.options=o;
            that.build();
        }
    };

    var settings = extend({
             url:      null,           // id,class,url
             overlay : true,
             closeByOverlay:true,
             klass : false,
             effect  : 'fadein',
             closeBtn : '.btn-close',
             zIndex :  9999,
             width : null,
             speed : 250,
             overlayBg : '#000',
             error : '元素不存在，请重新选择',
             startCallback : null,   //渲染页面元素前回调方法
             completeCallback : null, //页面渲染完毕回调方法
             beforeCloseCallback : null, //关闭前回调方法
             closeCallback : null, //关闭后的回调
             customCallback : null //自定义事件监听方法
        },options);

    if (settings.url === null ) {
        if ( !!$(target).length ) {
            settings.url = $(target).attr('href');
        }
    }

    if (typeof target === 'object' ) {
        $(target).each( function () {
            $(this).data('modalBox', new Plugin( this, settings ) );
        });
    }
};

module.exports = modalBox; 