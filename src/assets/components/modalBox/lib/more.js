require("./more.less");
var $ = window.$ || require("jquery");

var modalBox = require("./index");
var extend =  require('object-assign');

function _modalBox(isNeed,str,option){
    var str = str +'', _html = str.replace(/\r\n/g,"<br/>");

    var o= extend({
        cancel_txt : "取 消",
        btn_txt : "确 认",
        title : "提 示",
        cancel_id : "",
        confirm_id : ""
    },option);

    var tmpArr = [];
    var _btns = '';
    if(!isNeed){
        _btns = '<p class="btn-row alertBtnRow"><a href="javascript:;" class="btn btn-primary btn-medium btn-confirm btn-close" id="'+o.confirm_id+'">'+o.btn_txt+'</a></p>';              
    }else{
        _btns = '<p class="btns-row confirmBtnRow"><a href="javascript:;" class="btn btn-cancel btn-medium btn-default btn-close" id="'+o.cancel_id+'">'+o.cancel_txt+'</a><a href="#" class="btn btn-confirm btn-primary btn-close"  id="'+o.confirm_id+'">'+o.btn_txt+'</a></p>';  
    }

    tmpArr.push('<div class="modalCntWrap altCfm">');
    tmpArr.push('<h3 class="clearfix"><a href="javascript:;" class="icons btn-close fr"></a><span class="fl">'+o.title+'</span></h3>'); 
    tmpArr.push('<div class="modalPadd">');
    tmpArr.push('<div class="txt-row"><div class="tc">'+_html+'</div></div>'+_btns);
    tmpArr.push('</div></div>');

    modalBox(window,{
        klass : "w480",
        html : tmpArr.join(''),
        width : '480px',
        closeByOverlay : false,
        completeCallback : function(){
            if(o.callback){
                $('.btn-confirm').on('click',function(e){
                    e.preventDefault();
                    o.callback();
                });
            }
            if(o.cancelcallback){
                $('.btn-cancel').on('click',function(e){
                    e.preventDefault();
                    o.cancelcallback();
                });
            }
            if(o.customCallback){
                o.customCallback();
            }    
        },
        close : function(){
            if(o.closeCallback){
                o.closeCallback();
            } 
        }
    });
}

function _confirm(str,option){
    _modalBox(true,str,option);
}

function _alert(str,option){
    _modalBox(false,str,option);
}


window._confirm  = _confirm;
window._alert = _alert;