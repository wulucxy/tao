webpackJsonp([32],{0:function(n,t,e){function o(n,t){if(n.hasClass("btn-primary")||a("[btn-type=1]").length){if(a("[btn-type=1]").hasClass("up"))var e="您已经点过支持了";else if(a("[btn-type=1]").hasClass("down"))var e="您已经点过反对了";else var e="您暂时不可以点击";return void warn(e)}var o=1==t?"/news/up":"/news/down";a.ajax({url:preServer+r+o,type:"post",contentType:"application/json",data:JSON.stringify({newsId:i}),success:function(e){if("string"==typeof e)var e=a.parseJSON(e);return"1011"==e.code?(window.location="/home/signin",!1):1!=e.code?void warn(e.msg):(n.removeClass("btn-negative").addClass("btn-primary"),1==t?a("#upCount").text(Number(a("#upCount").text())+1):2==t&&a("#downCount").text(Number(a("#downCount").text())+1),void n.attr("btn-type",1))},error:function(n){console.log(n)}})}e(22),e(265);var a=window.$||e(45);e(46),e(47);e(267);var r=a("[name=province]").val(),i=a("[name=newsId]").val();a(document).on("click",".up",function(n){n.preventDefault();var t=a(this);o(t,1)}),a(document).on("click",".down",function(n){n.preventDefault();var t=a(this);o(t,2)}),document.title=a(".articleWrap .head h4").text()},265:function(n,t){},267:function(n,t){}});