webpackJsonp([16],{0:function(t,e,o){o(21),o(183);var n=window.$||o(44),r=(o(45),o(46),o(185)),a=n("[name=province]").val();r.init({provinceId:a,submitFormCallback:function(){r.subFunc.call(r)}})},183:function(t,e){},185:function(t,e,o){var n=window.$||o(44);o(62);var r=o(46),a=o(186),i=o(53),l=o(193),c=o(195),s=n("[name=province]").val(),u={init:function(t){this.options=t;n("#myInfoForm").validator({errorParent:".row",successCallback:function(e){var o=n(e.target).closest(".btn");t.submitFormCallback&&t.submitFormCallback(o,n("#myInfoForm"))},focusinCallback:function(){n(this);r.hideError(n(".errTxt"))},errorCallback:function(t){n(".errTxt");r.showError(n(".errTxt"))}}),this.bindEvt(),i.isModernBrower&&"9"!=i.isIE()?l.init():"9"!=i.isIE()&&"8"!=i.isIE()||c.init()},subFunc:function(t,e){var o=this,r=[{type:"name",url:"/profile/name",field:"userName"},{type:"sex",url:"/profile/sex",field:"sex"},{type:"highSchool",url:"/profile/school",field:"schoolId"},{type:"highYear",url:"/profile/school/year",field:"year"}],a=0;n.each(r,function(t,e){var i={};i[e.field]=n("[name="+e.type+"]").val(),"highSchool"==e.type&&(i[e.field]=n("[name="+e.type+"]").attr("code")),n.ajax({url:preServer+s+e.url,data:JSON.stringify(i),type:"post",success:function(t){if("string"==typeof t)var t=n.parseJSON(t);return 1!=t.code?void warn(t.msg):(a++,void(a==r.length&&o.subSuccessCallback()))}})})},subSuccessCallback:function(){warn("个人资料更新成功",function(){window.location="/user"})},bindEvt:function(){this.addSchool(),this.addYear()},addYear:function(){for(var t=(new Date).getFullYear(),e=[],o=0;o<5;o++)e.push(t--);var r=n("[name=highYearInput]").length?n("[name=highYearInput]").val():"",a=[];n.each(e,function(t,e){a.push("<option value="+e+">"+e+"</option>")}),n("[name=highYear]").empty().append('<option value="">请选择</option>'),n("[name=highYear]").append(a.join("")),r&&n("[name=highYear]").val(r)},addSchool:function(){var t=this.options;a.init({el:".addSchool",provinceId:t.provinceId,type:"highSchool",url:"/v2_1/client/"+s+"/highSchool/search",startCallback:function(t){t.find("h3 span").text("选择高中")},selectListCallback:function(t){n(".btn-close").trigger("click"),n(".addSchool").val(t.attr("name")),n(".addSchool").attr("code",t.attr("code")),n(".addSchool").closest(".row").removeClass("error empty")}})}};t.exports=u},193:function(t,e,o){var n=window.$||o(44),r=(o(194),n("[name=province]").val()),a=(o(53),{init:function(t){this.settings=t,this.bindEvt()},bindEvt:function(){var t=this;t.settings;if(n("#picker").length){var e=WebUploader.create({auto:!0,swf:"http://www.tzhiyuan.net/data/upload/swfupload.swf",server:preServer+r+"/attach/uploadAttach",chunked:!0,pick:{id:"#picker",innerHTML:"编辑图片"},resize:!1,accept:{title:"Images",extensions:"gif,jpg,jpeg,bmp,png",mimeTypes:"image/*"},formData:{avatar:""},fileVal:"avatar"});e.on("beforeFileQueued",function(t){}),e.on("fileQueued",function(t){}),e.on("uploadProgress",function(e,o){t.loadingStart()}),e.on("uploadSuccess",function(e,o){t.setAvatar(e,o)}),e.on("uploadError",function(t,e){console.log(e)}),e.on("uploadComplete",function(e){t.loadingStop()}),e.on("error",function(t){console.log(t)})}},loadingStart:function(){document.getElementById("loading").style.display="inline"},loadingStop:function(){document.getElementById("loading").style.display="none"},setAvatar:function(t,e){if("string"==typeof e)var e=n.parseJSON(e);return 1!=e.code?void warn(e.msg):void n.ajax({url:preServer+r+"/profile/avatar",type:"post",data:JSON.stringify({avatar:e.result.avatar}),success:function(t){if("string"==typeof t)var t=n.parseJSON(t);return 1!=t.code?void warn(t.msg):void warn("头像上传成功",function(){window.location.href="/user"})}})}});t.exports=a},194:function(t,e){"use strict";var o=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===n.call(t)},a=function(t){if(!t||"[object Object]"!==n.call(t))return!1;var e=o.call(t,"constructor"),r=t.constructor&&t.constructor.prototype&&o.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!r)return!1;var a;for(a in t);return"undefined"==typeof a||o.call(t,a)};t.exports=function i(){var t,e,o,n,l,c,s=arguments[0],u=1,p=arguments.length,d=!1;for("boolean"==typeof s?(d=s,s=arguments[1]||{},u=2):("object"!=typeof s&&"function"!=typeof s||null==s)&&(s={});u<p;++u)if(t=arguments[u],null!=t)for(e in t)o=s[e],n=t[e],s!==n&&(d&&n&&(a(n)||(l=r(n)))?(l?(l=!1,c=o&&r(o)?o:[]):c=o&&a(o)?o:{},s[e]=i(d,c,n)):"undefined"!=typeof n&&(s[e]=n));return s}},195:function(t,e,o){var n=window.$||o(44),r=(o(194),n("[name=province]").val()),a={init:function(t){this.settings=t,this.bindEvt()},bindEvt:function(){function t(t,o){e.setAvatar(t,o)}var e=this;e.settings;if(n("#picker").length){var o={flash_url:"http://www.tzhiyuan.net/data/upload/swfupload.swf",upload_url:preServer+r+"/attach/uploadAttach",post_params:{avatar:""},file_post_name:"avatar",file_size_limit:"4 MB",file_types:"*.jpg;*.gif;*.png;*.jpeg;*.bmp",file_types_description:"img",custom_settings:{cancelButtonId:"btnCancel"},debug:!1,use_query_string:!0,button_image_url:"http://wacai-file.b0.upaiyun.com/assets/img/editAvatar.png",button_width:"82",button_height:"21",button_placeholder_id:"spanButtonPlaceHolder",button_action:SWFUpload.BUTTON_ACTION.SELECT_FILE,file_queued_handler:fileQueued,file_queue_error_handler:fileQueueError,file_dialog_complete_handler:fileDialogComplete,upload_error_handler:uploadError,upload_success_handler:uploadSuccess};swfu=new SWFUpload(o),window.froward=t}},setAvatar:function(t,e){if("string"==typeof e)var e=n.parseJSON(e);return 1!=e.code?void warn(e.msg):void n.ajax({url:preServer+r+"/profile/avatar",type:"post",data:JSON.stringify({avatar:e.result.avatar}),success:function(t){if("string"==typeof t)var t=n.parseJSON(t);return 1!=t.code?void warn(t.msg):void warn("头像上传成功",function(){window.location.href="/user"})}})}};t.exports=a}});