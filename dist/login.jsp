<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.65394861.css" rel="stylesheet"><link href="/static/web/css/login.bcd8f186.css" rel="stylesheet"></head>
<body>
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="loginWrap container">
			<div class="logoWrap tc">
				<img src="/static/web/img/taologo.png" class="responsive">
			</div>
			
			<div class="formWrap">
				<form action="#" onsubmit="return false" id="loginForm" >
					<div class="inputRows">
					 <div class="row clearfix">
					    <div class="inputWrap inputTextWrap">
					      <span class="iconWrap"><i class="icon-user icon-phone"></i></span>
					      <input type="tel" class="input form-control" id="mobile" name="mobile" maxLength="11" placeholder="请输入手机号" required autocomplete="off">
					    </div>
					    <span class="p-error">手机号为11位数字格式</span>
					    <span class="p-error-empty">手机号不能为空</span>
					 </div>

					 <div class="row clearfix">
					    <div class="inputWrap inputTextWrap">
					      <span class="iconWrap"><i class="icon-user icon-lock"></i></span>
					      <input type="password" class="input form-control" id="pw" name="pw" maxLength="11" placeholder="请输入密码" required autocomplete="off">
					    </div>
					    <span class="p-error">密码为4-20位数字或字母格式</span>
					    <span class="p-error-empty">密码不能为空</span>
					 </div>
					</div>
					
					 <div class="footerCnt">
					     <p id="errTxt" class="errTxt"></p>
					     <div class="row btnRow">
					       <button type="submit" class="btn btn-primary btn-block" id="loginBtn">
					       		<em class="subTxt">登录</em></button>
					     </div>
					     <div class="row clearfix tc subLinksRow">
					        <a href="javascript:;" class="subLinks" id="m_goForgetPw">忘记密码？</a>
					        <a href="javascript:;" class="subLinks" id="m_goReg">立即注册</a>
					     </div>

					     <!-- <div class="openLogin row">
					        <div class="line"><span class="h3">第三方登录</span></div>
					        <div class="openIconList">
					          <a href="#" class="weixin link">
					            <span class="thirdIcon wxIcon">&amp;nbps;</span><span class="vm">微信登录</span>
					          </a>
					          <a href="#" class="qq link">
					            <span class="thirdIcon qqIcon">&amp;nbps;</span><span class="vm">QQ登录</span>
					          </a>
					          <a href="#" class="weibo link">
					            <span class="thirdIcon wbIcon">&amp;nbps;</span><span class="vm">微博登录</span>
					          </a>
					          <span class="justify_fix"></span>
					        </div>
					    </div> -->
					 </div>
				</form>
			</div>

		</div>

	</div>

	<div class="bBar tc">
		Copyrights © 2014-2016 浙江日报新闻发展有限公司版权所有 ｜ 服务热线：0571-85311211
	</div>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/login.js"></script></body>
</html>