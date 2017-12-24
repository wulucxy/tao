<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
</head>
<body>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="content">
			<div class="errWrapper w99 vm">
				<span class="imgWrap dib">
					<img src="/static/web/img/ufo.png" class="responsive">
				</span>
				<p class="f20 mt48">
					页面不见了，程序猿们正在疯狂加班 . . .
				</p>
				<p class="mt32 f16">
					<em class="count">6</em>秒后跳转到首页
				</p>
				
				<div class="btnRow mt32">
					<a href="javascript:history.back(-1)" class="btn btn-primary btn-mid">返回上一页</a>

				</div>

			</div>
			<em class="pixel1"></em>
		</div>

	</div>
	<script src="//libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>

	<script type="text/javascript" src="/static/web/js/vendors.js"></script><script type="text/javascript" src="/static/web/js/error.js"></script></body>
</html>