webpackJsonp([5],{0:function(e,a,n){n(21),n(128);var t=window.$||n(44),o=n(45),r=(n(46),n(131)),i=n(132);r(t("#bookResultTab"),{tabsItem:"nav li",items:".content-wrap > section",klass:"current"});var s=o.getQuery("planId"),c=t("[name=province]").val(),l=t("[name=provinceName]").val();i.init({planId:s,provinceId:c,provinceName:l})},128:function(e,a){},132:function(e,a,n){var t=window.$||n(44),o=n(49),r=n(127),i=n(133),s=n(45),c={init:function(e){this.options=o({provinceName:"浙江省",provinceId:33e4,planId:""},e),this.bindEvt()},bindEvt:function(){var e=this;e.options;this.detailTrigger()},requestProfile:function(e,a){var n=this,o=n.options;t.ajax({url:preServer+o.provinceId+"/profile/plan/param?planId="+o.planId,contentType:"application/json",success:function(n){if("string"==typeof n)var n=t.parseJSON(n);return e.removeClass("flag"),1!=n.code?void warn(n.msg):void(a&&a(n.result))},error:function(a){e.removeClass("flag"),console.log(a)}})},transformData:function(e){var a,n=this,o=n.options,r=e.param,s=t.map(r.subjects,function(e){return{name:i.getSubjectName(e),code:e}});a=r.cities?t.map(r.cities,function(e){return{name:i.getCityName(e),code:e}}):[];var c;return c=r.majors?r.majors:[],{provinceName:o.provinceName,score:r.score,subjects:s,cities:a,majors:c}},detailTrigger:function(){var e=this;e.options;t("[data-trigger]").on("click",function(a){a.preventDefault();var n=t(a.target).closest(".trigger");n.hasClass("flag")||(n.addClass("flag"),e.requestProfile(n,function(a){var t=e.transformData(a);modalBox(n.get(0),{html:r(t),klass:"w540 shadow",closeByOverlay:!1,startCallback:function(){s.setupLabel()},completeCallback:function(){}})}))})}};e.exports=c}});