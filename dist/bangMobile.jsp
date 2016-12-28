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
	<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/bangMobile.b1179a12.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<div class="container">
			
			<!-- 保存accesstoken属性 -->
			<input type="hidden" name="accessToken" value="${accessToken}">

			<!-- 保存accesstoken属性 -->
			<input type="hidden" name="openId" value="${openId}">

			<!-- 保存bangUrl属性 -->
			<input type="hidden" name="bangUrl" value="${bangUrl}">

			<!-- 保存bangUrl属性 -->
			<input type="hidden" name="uid" value="${uid}">

			<div class="content">
				<h3 class="clearfix title neeRow">
					<span class="fl s-title">
						<span class="">绑定手机</span>
						<em class="underLine"></em>
					</span>
				</h3>

				<div class="formWrap bangMobile">
					<form action="javascript:;" onsubmit="return false" autocomplete="off" id="bangMobileForm" class="rel">
						
						<div class="inputRows">
							
							<div class="row clearfix">
								<label for="mobile" class="control-label column col1 fl">
									<i class="icon-user icon-phone"></i>
									<em class="vm">手机号：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap">
										<input type="tel" class="input form-control" id="mobile" name="mobile" required placeholder="请输入手机号" maxlength="11">
									</div>
								</div>
								<div class="errInfo">
									<span class="p-error">手机号为11位数字格式</span>
							    	<span class="p-error-empty">手机号不能为空</span>
								 </div>
							</div>

							<div class="row clearfix">
								<label for="provinceId" class="control-label column col1 fl">
									<i class="icon-user icon-location"></i>
									<em class="vm">所在省份：</em></label>
								<div class="col2 selectWrap rel">
									<div class="fieldWrap">
										<select name="province" id="provinceId" class="form-control">
											
										<c:forEach var="list" items="${areaList}">
											<option value=${list.code}>${list.name}</option>
										</c:forEach>

							      		</select>
									</div>
								</div>
								<div class="errInfo">
									
								 </div>
							</div>
							
							<div class="row clearfix">
								<label for="mobile" class="control-label column col1 fl">
									<i class="icon-user icon-code"></i>
									<em class="vm">短信验证码：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap rel">
										<input type="text" class="input form-control" id="code" name="code" maxLength="4" placeholder="请输入短信验证码" required autocomplete="off">
									    <label class="usn verifyLabel active tc" id="verifyLabel">
										        <em id="minCount" class="dn">
										            <b class="n">
										                <time>-</time>
										                秒</b>后重新发送
										        </em>
										        <em class="n" id="activeStatus">发送验证码</em>
										        <em id="reSend" class="dn">点击重新发送</em>
										</label>
									</div>
								</div>
								<div class="errInfo">
									<span class="p-error">验证码为4位数字格式</span>
							    	<span class="p-error-empty">验证码不能为空</span>
								 </div>
							</div>
						</div>

						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>

							<div class="row btnRow tc">
			                    <button type="submit" class="btn btn-positive btn-form" id="bangBtn">
			                        <em class="subTxt">立即绑定</em>
			                    </button>
			      			</div>

						</div>

					</form>
				</div>

			</div>
		</div>

		<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
		<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.02bb6bf1.js"></script><script src="/static/web/js/bangMobile.3400f8de.js"></script></body>
</html>