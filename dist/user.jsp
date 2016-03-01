<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.2f421bb3.css" rel="stylesheet"><link href="/static/web/css/user.b04e7486.css" rel="stylesheet"></head>
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
										<img src="http://placehold.it/148x148" class="responsive" alt="个人头像">
									</span>
									<p class="elipsis g3 mt10 f16">张珊李四</p>
								</div>
								<ul class="userInfoList">
									<li class="current"><a href="javascript:;" data-link="myInfo">我的资料</a></li>
									<li><a href="javascript:;" data-link="history">历史方案</a></li>
									<li><a href="javascript:;" data-link="test">历史测试</a></li>
									<!-- <li><a href="javascript:;" data-link="achivement">我的成绩</a></li> -->
									<li><a href="javascript:;" data-link="collection">我的收藏</a></li>
									<li><a href="javascript:;" data-link="question">我的提问</a></li>
									<li class="last"><a href="javascript:;" data-link="book">我的预约</a></li>
									<!-- <li class="last"><a href="javascript:;" data-link="coupon">优惠券</a></li> -->
								</ul>
								<div class="kefu">
									<p>客服电话：</p>
									<p class="blue">0571-88888888</p>
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
								<jsp:include page = "/partials/user/_myInfo.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
								</jsp:include>

								<!--  历史方案 -->
								<jsp:include page = "/partials/user/_history.jsp">
									<jsp:param name="loadMoreUrl" value="/v2/client/loadmore/history" />
									<jsp:param name="loadMoreTmpl" value="history" />
								</jsp:include>

								<!--  历史测试 -->
								<jsp:include page = "/partials/user/_test.jsp">
									<jsp:param name="loadMoreUrl" value="/v2/client/loadmore/test" />
									<jsp:param name="loadMoreTmpl" value="test" />
								</jsp:include>

								<!--  achivement -->
								<!-- <jsp:include page = "/partials/user/_achivement.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
								</jsp:include> -->

								<!--  我的收藏 -->
								<%@ include file = "/partials/user/_collection.jsp" %>

								<!--  我的提问 -->
								<jsp:include page = "/partials/user/_question.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
									<jsp:param name="loadMoreTmpl" value="question" />
								</jsp:include>

								<!--  我的预约 -->
								<jsp:include page = "/partials/user/_book.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
									<jsp:param name="loadMoreTmpl" value="book" />
								</jsp:include>

								<!--  我的优惠券 -->
								<!-- <jsp:include page = "/partials/user/_coupon.jsp">
									<jsp:param name="loadMoreUrl" value="/loadmore" />
									<jsp:param name="loadMoreTmpl" value="coupon" />
								</jsp:include> -->
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/user.js"></script></body>
</html>