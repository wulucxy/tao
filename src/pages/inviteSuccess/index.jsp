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
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container bookWrapper">
			<div class="container">
				<div class="content">
					<h3 class="clearfix title">
						<span class="fl s-title">
							推荐有奖
							<em class="underLine"></em>	
						</span>
					</h3>
					<div class="formWrap clearfix">
						<div class="column col1 fl">

							<div class="pl10">
								<div class="bg rel">
									<div class="p10 imgWrap">
										<img src="./img/coupon.png" alt="" class="responsive">
									</div>
									<div class="coupon_texts">
										<p>支付<em class="positive">线上</em>服务时，可抵扣<em class="positive">30元</em>现金</p>
										<p>支付<em class="positive">线下</em>服务时，可抵扣<em class="positive">80元</em>现金</p>
									</div>
								</div>

								<div class="recommend-texts">
									你的好朋友送你一张淘志愿“升学规划专家预约”的优惠券，赶紧输入手机号领取！
								</div>
							</div>
							

							<div class="recieveTxts">
								优惠券已放入你的淘志愿账户中请注册或者登录后使用
							</div>

						</div>
						<div class="column col2 fr">
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
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	</body>
</html>