<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.afa491ec.css" rel="stylesheet"><link href="/static/web/css/pay/book.719892b2.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">
		
		<!-- 保存provinceName属性 -->
		<input type="hidden" name="provinceName" value="${user.province.name}">

		<!-- 保存userName属性 -->
		<input type="hidden" name="userName" value="${user.userName}">

		<!-- 保存orderId属性 -->
		<input type="hidden" name="orderId" value="${orderId}">

		<!-- 保存orderId属性 -->
		<input type="hidden" name="planId" value="${planId}">

		<div class="container bookContainer">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考志愿定制
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="info">
							<i class="settingIcon icon-setting"></i><em class="vm">我的信息</em>
						</a>
					</div>
				</h3>
				
				<div class="bg bg-blue mb20 lh42 tc">支&nbsp;&nbsp;付</div>
				<div class="formWrap">
					<div class="payContent f18">
					<p class="txts">${planDes}</p>
					<form action="#" onsubmit="return false" autocomplete="off" id="payForm" class="g4">
						<div class="media">
							<span class="control-label column col1 fl">
								支付金额:	
							</span>
							<div class="col2 txtWrap rel media-body">
								<span class="blue f26">${price}</span>元
							</div>
						</div>
						<div class="media">
							<span class="control-label column col1 fl">
								支付方式:
							</span>
							<div class="col2 radioWrap rel media-body">
								<div class="row">
									<label>
									<input type="radio" name="channel" value="alipay_pc_direct" checked>
									<i class="payIcon zhifubao"></i>
									<em>支付宝</em>
									</label>
								</div>
								<div class="row">
									<label>
									<input type="radio" name="channel" value="coupon">
									<i class="payIcon card"></i>
									<em>支付卡</em>
									<span class="inputWrap dib">
										<input type="text" class="form-control input" id="card" placeholder="请输入支付卡号">
									</span>
									</label>
								</div>
							</div>
						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>

							<div class="row btnRow tc">
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">确认支付
			                    </button>
                  			</div>

						</div>

					</form>

					<a class="demoImg imgWrap rel dib" href="/sampleWishes" target="_blank">
						<img src="/static/web/img/demo2.png" class="responsive">
						<span class="btn btn-sample abs">样本预览</span>
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
	
	<pre name="majorList">${majorList}</pre>
	<pre name="majorListJson">${majorListJson}</pre>
	<pre name="c">${c}</pre>
	<pre name="cJson">${cJson}</pre>
	<pre name="courseType">${courseType}</pre>
	<pre name="batch">${batch}</pre>
	<pre name="score">${score}</pre>
	<pre name="place">${place}</pre>

	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/pay/book.js"></script></body>
</html>