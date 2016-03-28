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
						
						<section class="faqList now">
						<h4 class="blue">今日问答</h4>
							<div class="list-group">
							<c:forEach var="list" items="${today}">
							<a href="#" class="list-group-item">
								<i class="fr taoIcon icon-right"></i>
						    	<span class="fl collegeName">${list.college.collegeName}</span>
						    	<span class="body orange">正在进行</span>
							</a>
							</c:forEach>
						</div>
						</section>

						<section class="faqList pre">
						<h4 class="blue">问答预告</h4>
							<div class="list-group">
							<c:forEach var="list" items="${forecast}">
							<a href="javascript:;" class="list-group-item clearfix">
							    <span class="fl collegeName">${list.college.collegeName}</span>
							    <span class="fr orange">12月20日&nbsp;13:00-17:00</span>
						  	</a>
							</c:forEach>
						</div>
						</section>

						<section class="faqList history">
						<h4 class="blue more">历史问答
							<a href="#" class="fr" target="_blank">更多>></a>
						</h4>
							<div class="list-group">
							<c:forEach var="list" items="${history}">
							<a href="javascript:;" class="list-group-item clearfix">
						    <div class="fl">
						    	<p class="collegeName">${list.college.collegeName}</p>
						    	<p class="f13">总共&nbsp;${list.count}&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
							</c:forEach>
						</div>
						</section>

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
	</body>
</html>