<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/planEntrance.48e8f1cc.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		<div class="container planEntrance">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						智能志愿定制
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="planContainer">
					<div class="planCardRow clearfix">
						<a class="planCard db" target='_blank' href='/box/plan/book_step2'>
							<div class="planTxt">
								<h4>我还没有确定要填的志愿</h4>
								<p class='subTxt'>试试淘志愿智能填报</p>
							</div>
						</a>
						<a class="planCard db"  target='_blank' href='/box/plan/evaluate_step2'>
							<div class="planTxt">
								<h4>我不知道我填的志愿是否合适</h4>
								<p class='subTxt'>淘志愿为你评估志愿的录取概率</p>
							</div>
						</a>
					</div>
				</div>
			</div>

		</div>
	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.6331695d.js"></script><script src="/static/web/js/planEntrance.60aba585.js"></script></body>
</html>