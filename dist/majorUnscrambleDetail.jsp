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
<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/majorUnscrambleDetail.6e0b6870.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存province属性 -->
		<input type="hidden" name="newsId" value="${newsId}">

		<!-- favorId,如果有的话 -->
		<input type="hidden" name="favorId" value="${favorId}">

		<div class="container ovh">
			<div class="f-layout clearfix">
				<div class="column c-66 fl">
					<div class="colPad">
						<div class="articleWrap">
							<h3>热门专业解读：${majorUnscrambleDetial.title}</h3>
							<p class="g6 moment">${majorUnscrambleDetial.moment}</p>
							<div class="videoWrap">
								<!-- HTML5 video tag -->
				    <video controls="controls" width="${majorUnscrambleDetial.videoWidth}" height="${majorUnscrambleDetial.videoHeight}">
				        <!-- .mp4 file for native playback in IE9+, Firefox, Chrome, Safari and most mobile browsers -->
				        <source src="${majorUnscrambleDetial.videoUrl}" type="video/mp4" />
				        <!-- flash fallback for IE6, IE7, IE8 and Opera -->
				        <object type="application/x-shockwave-flash"
				                data="swf/flowplayer-3.2.18.swf" width="${majorUnscrambleDetial.videoWidth}" height="${majorUnscrambleDetial.videoHeight}">
				            <param name="movie" value="swf/flowplayer-3.2.18.swf" />
				            <param name="allowFullScreen" value="true" />
				            <param name="wmode" value="transparent" />
				            <!-- note the encoded path to the image and video files, relative to the .swf! -->
				            <!-- more on that here: http://en.wikipedia.org/wiki/Percent-encoding -->
				            <param name="flashVars"
				                   value="config={'playlist':[{'url':'..%2Fvid%2Fdemo.mp4','autoPlay':false}]}" />
				        </object>
				    </video>
							</div>
							<div class="labelList">
									<div class='labelItem'>
										<p class="g6 label">样本院校</p>
										<a class='blue' target='_blank' href='/library/college/${majorUnscrambleDetial.universityId}'>${majorUnscrambleDetial.universityName}</a>
									</div>
									<div class='labelItem'>
										<p class="g6 label">关联专业</p>
										<c:forEach var="list" items="${majorUnscrambleDetial.majorList}">
											<a class='blue' href='/library/major/${list.id}' target='_blank'>${list.name}</a>
											<br />
										</c:forEach>
									</div>
							</div>
						</div>
					</div>
				</div>
				<div class="column c-33 fl">
					<div class="colPad r-content">
						<section class="hot">
							<div class="content">
								<h3 class="clearfix title">
									<span class="fl s-title">
										热门资讯
										<em class="underLine"></em>	
									</span>
								</h3>
								
								<ul class="timelineList">
									<c:forEach var="list" items="${hotList}">
									   <li class="timeline media">
									   <span class="label fl">
											${list.time}
										</span>
										<div class="media-body"><a href="${list.href}" target="_blank">
											${list.title}
										</a></div>
									   </li>
									</c:forEach>
								</ul>
							</div>
						</section>

						<section class="mt20 mb20">
							<%@ include file = "/partials/_direct.jsp" %>
						</section>

					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>
	
	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>

	<script src="/static/web/js/vendors.d21aa778.js"></script><script src="/static/web/js/majorUnscrambleDetail.eebc3b37.js"></script></body>
</html>