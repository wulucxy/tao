<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%> 
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/scoreTransformer.7de96f7b.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container transformerWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						分数转换
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						<form action="javascript:;" onsubmit="return false;" id="scoreTransformerForm">
							<div class="inputWrap row">
								<input class="input form-control" type="number" name="score" id="score" placeholder="请输入2017年高考分数" required max="800" min="0" noPtnCheck=true>
								<div class="errInfo">
								<span class="p-error">高考分数为0-800之间，请重新填写</span>
								<span class="p-error-empty">高考分数不能为空</span>
								</div>
							</div>
							
							<div class="row btnRow">
			                    <button type="submit" class="btn btn-primary btn-block" id="verifyBtn">
			                        <em class="subTxt">转换</em>
			                    </button>
	              			</div>
              			</form>
						
						<div class="dzWrapper tc dn">
	              			<div class="dz">
								<p>XXX分在2016年相应的分数和排名</p>
							</div>
							<ul class="dzLists">
								<li><span class="blue">总分一（第一批）：</span><span class="orange">XXX分</span></li>
								<li><span class="blue">总分二（第二批）：</span><span class="orange">XXX分</span></li>
								<li><span class="blue">总分三（第三批）：</span><span class="orange">XXX分</span></li>
							</ul>
							<div class="g9 f20">分数转换了，你才能更好地使用数据库</div>
						</div>

					</div>
					<div class="col2 fr">
						<%@ include file = "/partials/_direct.jsp" %>
					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.5ef56f5a.js"></script><script src="/static/web/js/scoreTransformer.7f138298.js"></script></body>
</html>