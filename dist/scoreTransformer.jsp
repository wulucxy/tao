<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
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
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container transformerWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						分数转换
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						1234
						

					</div>
					<div class="col2 fr">
						<%@ include file = "/partials/_direct.jsp" %>
					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/scoreTransformer.js"></script></body>
</html>