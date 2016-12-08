<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/user.bd666e00.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container ovh">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						<span class="vm">个人中心</span>
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="f-layout clearfix">
					<div class="column c-2 fl">
						<div class="colPad">

							<div class="m-sideNav">
								<div class="avatarWrap tc">
									<span class="imgWrap">
										<img src="${user.userAvatar}" class="responsive" alt="个人头像">
									</span>
									<p class="elipsis g3 mt10 f16">${user.userName}</p>
								</div>
								<ul class="userInfoList">
									<li class="current"><a href="javascript:;" data-link="myInfo">我的资料</a></li>
									<li><a href="javascript:;" data-link="history">历史方案</a></li>
									<li><a href="javascript:;" data-link="test">历史测试</a></li>
									<!-- <li><a href="javascript:;" data-link="achivement">我的成绩</a></li> -->
									<li><a href="javascript:;" data-link="collection">我的收藏</a></li>
									<li><a href="javascript:;" data-link="question">我的提问</a></li>
									<li class=""><a href="javascript:;" data-link="book">我的预约</a></li>
									<li class="last"><a href="javascript:;" data-link="coupon">我的优惠券</a></li>
								</ul>
								<div class="kefu">
									<p>客服电话：</p>
									<p class="blue">0571-85311211</p>
									<p>工作时间：</p>
									<p>09:00～17:00</p>
								</div>
							</div>

						</div>
					</div>
					<div class="column c-8 fl">
						<div class="colPad">
							
							<div class="contentWrap">
								<!--  我的资料 -->
								<%@ include file = "/partials/user/_myInfo.jsp" %>
								

								<!--  历史方案 -->
								<%@ include file = "/partials/user/_history.jsp" %>

								<!--  历史测试 -->
								<%@ include file = "/partials/user/_test.jsp" %>

								<!--  achivement -->
								<!-- <jsp:include page = "/partials/user/_achivement.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
								</jsp:include> -->

								<!--  我的收藏 -->
								<%@ include file = "/partials/user/_collection.jsp" %>

								<!--  我的提问 -->
								<%@ include file = "/partials/user/_question.jsp" %>

								<!--  我的预约 -->
								<%@ include file = "/partials/user/_book.jsp" %>

								<!--  我的优惠券 -->
								<%@ include file = "/partials/user/_coupon.jsp" %>

							</div>
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
	<script type="text/javascript" src="//wacai-file.b0.upaiyun.com/assets/js/webuploader.min.js"></script>
	

	<!--[if lte IE 9]>
	<script type="text/javascript" src="//wacai-file.b0.upaiyun.com/assets/js/swfupload.js"></script>
  	<script type="text/javascript" src="//wacai-file.b0.upaiyun.com/assets/js/handlers.js"></script>
	<![endif]-->
	
	<script src="/static/web/js/vendors.6551d704.js"></script><script src="/static/web/js/user.543243b5.js"></script></body>
</html>