webpackJsonp([5],{0:function(e,a,t){function n(){var e={majorList:c.parseJSON(c("[name=majorListJson]").text()),c:c.parseJSON(c("[name=cJson]").text()),batch:c("[name=batch]").text(),courseType:c("[name=courseType]").text(),score:c("[name=score]").text(),place:c("[name=place]").text(),province:c("[name=province]").val(),provinceName:c("[name=provinceName]").val(),userName:c("[name=userName]").val()};return e}function o(){var e=n();c("[data-trigger]").on("click",function(a){a.preventDefault();var t=c(a.target).closest(".trigger");modalBox(t.get(0),{html:s(e),klass:"w540 shadow",closeByOverlay:!1,startCallback:function(){r.setupLabel()},completeCallback:function(){}})})}t(21),t(128);var c=window.$||t(44),r=t(45);t(46);console.log("aaaaa");var s=t(127),l=t(131);l(c("#bookResultTab"),{tabsItem:"nav li",items:".content-wrap > section",klass:"current"}),o()},128:function(e,a){}});