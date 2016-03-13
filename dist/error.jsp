<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.a4349030.css" rel="stylesheet"><link href="/static/web/css/error.355935e0.css" rel="stylesheet"></head>
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

	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/error.js"></script></body>
</html>