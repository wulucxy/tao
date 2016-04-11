<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.65394861.css" rel="stylesheet"><link href="/static/web/css/majorExam3.d41d8cd9.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container proTestWrapper">
			<section class="s-proTest">
				<div class="content">
					<h3 class="clearfix title neeRow">
						<span class="fl s-title">
							<span class="vm">专业选择测试</span>
							<span class="badge"><i class="icon-nee"></i>
							<em class="vm">教育部考试中心独家授权</em></span>
							<em class="underLine"></em>	
						</span>
					</h3>
					
					<div class="contentWrap">
						
						<div class="testResult">
							<!-- 测试结果 -->
							<%@ include file = "/partials/_testRes.jsp" %>
						</div>

					</div>
				</div>	
			</section>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/majorExam3.js"></script></body>
</html>