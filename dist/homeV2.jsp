
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
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/homeV2.37bb8823.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
	<section class="s-banner rel">
		<div class="bannerShow bannerLoading" id="bannerShow">
			 <ul id="bannerList" class="bannerList clearfix">
				
				<c:forEach var="banner" items="${bannerList}">
				   <li class="picSlide" data-pic = "${banner.imgUrl}" >
				   <c:choose>
				    <c:when test="${banner.href != null}">
				   		<a href="${banner.href}" target="_blank" >&nbsp;</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;" >&nbsp;</a>
					</c:otherwise>
				   </c:choose>
				   </li>
				</c:forEach>
			 </ul>
		</div>
	</section>
	
	<section class="s-grids">
		<div class="container ovh">
			<div class="f-layout clearfix">
				<div class="column c-68 fl">
					<div class="colPad">
						<div class="grid-items">
							<div class="row upRow clearfix">
								<a href="/box/plan/book_step1" target="_blank" class="grid-item media link-book fl">
									<span class="fl imgWrap">
										<img src="/static/web/img/book.png" class="responsive">
									</span>
									<div class="media-body">
										<h3>高考志愿定制</h3>
										<div>已成功帮助<span class="yellow">${number1}</span>名学生</div>
									</div>
								</a>
								<a href="/box/plan/evaluate_step1" target="_blank" class="grid-item media link-evaluate fr">
									<span class="fl imgWrap">
										<img src="/static/web/img/book2.png" class="responsive">
									</span>
									<div class="media-body">
										<h3>高考志愿评估</h3>
										<div>已成功帮助<span class="yellow">${number2}</span>名学生</div>
									</div>
								</a>
							</div>
							<div class="row downRow">
								<a href="/box/plan/major_exam1" target="_blank" class="grid-item">
									<i class="icon1 down-icon"></i>
									<div class="figcaption">专业选择测试</div>
								</a>
								<a href="/box/plan/aboard" target="_blank" class="grid-item">
									<i class="icon2 down-icon"></i>
									<div class="figcaption">留学方案定制</div>
								</a>
								<a href="/appointment/create" target="_blank" class="grid-item item3">
									<i class="icon3 down-icon"></i>
									<div class="figcaption">升学规划专家预约</div>
								</a>
								<a href="/box/score_management" target="_blank" class="grid-item">
									<i class="icon4 down-icon"></i>
									<div class="figcaption">成绩管理</div>
								</a>
								<a href="/box/college_faq" target="_blank" class="grid-item">
									<i class="icon5 down-icon"></i>
									<div class="figcaption">专家问答</div>
								</a>
								<span class="justify_fix"></span>
							</div>
						</div>
					</div>
				</div>
				<div class="column c-32 fl">
					<div class="colPad">
						<%@ include file = "/partials/_direct.jsp" %>
					</div>
				</div>
			</div>
		</div>
	</section>

	<section class="s-carousel">
		<div class="collegeWrap container ovh">
		<div class="collegeTip">
			<div class="collegeTipTxt">推荐院校</div>
			<span class="mc mcRt"></span>
		</div>
		<div class="collegeListWrap">
		<ul class="collegeList clearfix">
			<c:forEach var="list" items="${collegeList}">
				<li class="college">
					<c:choose>
				    <c:when test="${list.href != null}">
				   		<a href="${list.href}" target="_blank">
							<img src="${list.imgUrl}" class="responsive">
						</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;">
							<img src="${list.imgUrl}" class="responsive">
						</a>
					</c:otherwise>
				   </c:choose>
				</li>
			</c:forEach>
		</ul>
		</div>
		</div>
	</section>
	
	<section class="ovh s-recommend">
	  <div class="container ovh">
		<div class="f-layout clearfix">
			<div class="column c-68 fl">
				<div class="colPad">

					<div class="content recommend">
						<h3 class="clearfix title" rel="recommend">
							<span class="fl s-title">
								推荐阅读
							</span>
							<a href="/info" class="link fr more" target="_blank"><em class="plus">+</em><span class="vm">更多</span></a>
						</h3>

						<ul class="listView recommendList clearfix">
							<c:forEach var="list" items="${recommendList}">
							   <li>
									<div class="media">
										<span class="fl imgWrap">
											<img src="${list.imgUrl}" class="responsive">
										</span>
										<div class="media-body">
										  	<a href="${list.href}" class="db" target="_blank">
												<div class="g0 txt" title="${list.fullTitle}">
													${list.title}
												</div>
												<div class="clearfix detail">

				<c:choose>
				    <c:when test="${list.source != null}">
				   		<span class="fl source g9 btn btn-primary btn-outlined">${list.source}</span>
					</c:when>
				</c:choose>
													
													<span class="moment g9">${list.moment}</span>
												</div>
											</a>
										</div>
									</div>
								</li>
							</c:forEach>
						</ul>
					</div>

				</div>
			</div>
			<div class="column c-32 fl">
				<div class="colPad">
					
					<div class="countdown g3">
						<span class="f18">${countdown}</span>
					</div>

					<div class="directs">
						<ul>
							<c:forEach var="list" items="${adList}">
							<li>
							<c:choose>
							    <c:when test="${list.href != null}">
							   		<a href="${list.href}" target="_blank" >
							   			<img src="${list.imgUrl}" >
							   		</a>
								</c:when>
								<c:otherwise>
									<a href="javascript:;" >
										<img src="${list.imgUrl}" >
									</a>
								</c:otherwise>
							</c:choose>
							</li>
							</c:forEach>
						</ul>
					</div>

				</div>
			</div>

		</div>
	  </div>
	</section>
	
	<c:if test="${ad3 != null and ad3 != ''}">
		<section class="ovh mt40">
			<div class="container tc">
				<a href="${ad3.href}" target="_blank" class="db">
					<img src="${ad3.imgUrl}" class="responsive">
				</a>
			</div>
		</section>				   
	</c:if>
	
	<section class="ovh s-feature">
		<div class="container ovh">
			<div class="featureList justify">
				<a href="/library/college" target="_blank" class="featureLink feature_1"></a>
				<a href="/library/major" class="featureLink feature_2" target="_blank"></a>
				<a href="/library/subject" class="featureLink feature_3" target="_blank"></a>
				<span class="justify_fix"></span>
			</div>
		</div>
	</section>

	<section class="ovh s-coop">
	  	<div class="container ovh tc">
	  		<h2>
	  			<icon class="coopIcon vm"></icon>
	  			<span class="vm">合作机构</span>
	  		</h2>
			<div class="coopLists">
				<a class="imgWrap coop tc" href="javascript:;">
					<img src="/static/web/img/nee.png" class="responsive">
				</a>

				<a class="imgWrap coop last" target="_blank" href="//www.strong-study.com/">
					<img src="/static/web/img/sq.png" class="responsive">
				</a>
			</div>				
		</div>
	</section>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.b662b212.js"></script><script src="/static/web/js/homeV2.814a3cdb.js"></script></body>
</html>