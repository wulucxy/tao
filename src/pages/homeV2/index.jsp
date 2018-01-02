
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
	<!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">
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
			<div class="interSection clearfix">
				<div class="column c-7 fl clearfix">
					<div class="column fl">
						<div class="card plan-card">
							<div class="card-inner tc">
								<div class="score">
									<c:choose>
								    <c:when test="${examInfo.score != null}">
								   		<span class="orange">
									   		<span class="h1">${examInfo.score}</span>
												<span>分</span>
											</span>
										</c:when>
										<c:otherwise>
											<a href="javascript:;" class='unScore'>输入预估分数、位次号及选考科目<br>开启智能志愿定制</a>
										</c:otherwise>
								  </c:choose>
									<i class="icon icon-v3 icon-edit js-edit"></i>
								</div>
								<div class="subjects">
									<c:forEach var="subject" items="${examInfo.subjectList}" varStatus="varStatus">
										${subject.name}
									  <c:if test="${ varStatus.last == false}">
									 	|
									 	</c:if>
									</c:forEach>
								</div>
								<a class="btn btn-primary btn-block js-edit" href="javascript:;">智能志愿定制</a>
							</div>
						</div>
					</div>
					<div class="column fl">
						<ul class="items-card card">
							<li class="colItem">
								<a href="/box/plan/major_exam1" class="db" target='_blank'>
									<span class="imgWrap">
										<img src="./img/v3/i-test.png" class="responsive">
									</span>
									<span class='vm'>专业测试</span>
								</a>
							</li>
							<li class="colItem">
								<a href="/box/college_faq" class="db" target='_blank'>
									<span class="imgWrap">
										<img src="./img/v3/i-qa.png" class="responsive">
									</span>
									<span class='vm'>专家问答</span>
								</a>
							</li>
							<li class="colItem">
								<a href="/appointment/create" class="db" target='_blank'>
									<span class="imgWrap">
										<img src="./img/v3/i-test.png" class="responsive">
									</span>
									<span class='vm'>专家服务</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="column c-3 fl direct">
					<%@ include file = "/partials/_direct.jsp" %>
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
	  <div class="container ovh clearfix">
	  	<!-- column 1 -->
			<div class="column c-7 fl">
				<div class="column fl c-5 major">
					<div class="content recommend recommend-box">
						<h3 class="clearfix title" rel="recommend">
							<span class="fl s-title">
								专业解读
							</span>
							<a href="/infoV3/majorUnscrambleList" class="link fr more" target="_blank">
								<span class="vm">查看更多</span>
							</a>
						</h3>

						<ul class="listView recommendList clearfix">
							<c:forEach var="list" items="${fillPolicRecommendList}">
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
				<div class="column fl c-5 fillPolic">
					<div class="content recommend recommend-box">
						<h3 class="clearfix title" rel="recommend">
							<span class="fl s-title">
								填报政策
							</span>
							<a href="/infoV3/fillPolicList" class="link fr more" target="_blank">
								<span class="vm">查看更多</span>
							</a>
						</h3>

						<ul class="listView recommendList clearfix">
							<c:forEach var="list" items="${majorUnscrambleRecommendList}">
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
			<div class="column c-3 fl">
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
			<div class="featureList clearfix">
				<a href="/library/college" target="_blank" class="featureLink feature_1">
					<i class="icon-college icon-feature"></i>
					<span class="featureTxt">院校数据</span>
				</a>
				<a href="/library/major" class="featureLink feature_2" target="_blank">
					<i class="icon-major icon-feature"></i>
					<span class="featureTxt">专业数据</span>
				</a>
				<a href="/library/subject" class="featureLink feature_3" target="_blank">
					<i class="icon-subject icon-feature"></i>
					<span class="featureTxt">学科数据</span>
				</a>
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
					<img src="./img/nee.png" class="responsive">
				</a>
			</div>				
		</div>
	</section>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script>
		window.__INITDATA__ = ${examInfo}
	</script>
	</body>
</html>