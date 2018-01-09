<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/majorExam3.8db4070b.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container proTestWrapper rel">
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
						
						<div class="testResult" id="printContent">
							<!-- 测试结果 -->
							<%@ include file = "/partials/_testRes.jsp" %>
						</div>

					</div>
				</div>	
			</section>
			
			<a href="javascript:;" id="printer" class="printer"></a>

		</div>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.9617e058.js"></script><script src="/static/web/js/majorExam3.6f3ee291.js"></script></body>
</html>