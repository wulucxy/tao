/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


var ZeroClipboard = require('./lib/ZeroClipboard.js');


ZeroClipboard.config({
    swfPath: 'http://s1.wacdn.com/public/lib/ZeroClipboard.swf'
});

$('#copy').attr('data-clipboard-text', $('#inviteUrl').val());

var client = new ZeroClipboard(document.getElementById("copy"));

client.on( "ready", function( readyEvent ) {
    client.on( "aftercopy", function( event ) {
        // 复制成功后的回调
        alert('链接复制成功，快分享给好友吧！');
        // event.target.style.display = "none";
        // console.log("Copied text to clipboard: " + event.data["text/plain"] );
    });
})

