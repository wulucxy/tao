<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
</head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存collegeName属性 -->
		<input type="hidden" name="collegeName" value="${collegeName}">

		<!-- 保存collegeName属性 -->
		<input type="hidden" name="scheduleId" value="${scheduleId}">

		<div class="container faqWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高校问答
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						
						<div class="content">
							<div class="qschoolList">
								<h3 class="blue">
									浙江大学
									<a href="javascript:;" class="btn btn-primary fr" id="applyQ">?&nbsp;提问</a>
								</h3>
								<div class="preloading qaListWrap">
									<ul class="contentWrap qaList">
									<li class="s-faq">
										<div class="q media">
											<span class="fl blue">问：</span>
											<div class="media-body">
												<p>老师好，我是浙江考生，成绩600，想问下填什么专业好？</p>
												<div class="badges">
													<span class="badge">浙江考生</span><span class="badge">2015</span>
												</div>
											</div>
										</div>
										<div class="a media">
											<span class="fl orange">答：</span>
											<div class="media-body">
												软件工程
											</div>
										</div>
									</li>

									<li class="s-faq">
										<div class="q media">
											<span class="fl blue">问：</span>
											<div class="media-body">
												<p>老师好，我是浙江考生，成绩600，想问下填什么专业好？老师好，我是浙江考生，成绩600，想问下填什么专业好？老师好，我是浙江考生，成绩600，想问下填什么专业好？老师好，我是浙江考生，成绩600，想问下填什么专业好？</p>
												<div class="badges">
													<span class="badge">浙江考生</span><span class="badge">2015</span>
												</div>
											</div>
										</div>
										<div class="a media">
											<span class="fl orange">答：</span>
											<div class="media-body">
												软件工程
											</div>
										</div>
									</li>
									</ul>
								</div>
							</div>
							
							<!-- 加载更多模块 -->
							<%@ include file = "/partials/_loadMore.jsp" %>

						</div>
					</div>
					<div class="col2 fr">
						<div class="directs">
							<ul>
								<c:forEach var="list" items="${adList}">
								<li><a href="${list.href}" target="_blank">
									<img src="${list.imgUrl}" >
								</a></li>
								</c:forEach>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/collegeFaqDetail.js"></script></body>
</html>