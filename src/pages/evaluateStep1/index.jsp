<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<!--[if IE 8 ]>    <html class="ie8 ie"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie9 ie"> <![endif]-->
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>高考志愿</title>
	</head>
<body>
	
	<c:set var="subjectsAll" value='${[{"name":"物理","code":"1"},{"name":"化学","code":"2"},{"name":"生物","code":"3"},
	{"name":"技术","code":"4"},{"name":"政治","code":"5"},{"name":"历史","code":"6"},
	{"name":"地理","code":"7"}]}'/>

	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container p_assess">

			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考志愿评估
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="detail">
							<i class="settingIcon icon-setting"></i><em class="vm">功能说明</em>
						</a>
						<a class="trigger" data-trigger="questions">
							<i class="settingIcon icon-question"></i><em class="vm">常见问题</em>
						</a>
					</div>
				</h3>

				<div class="breadcrumb">
					<ul class="clearfix">
						<li class="current"><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="assessForm_1" class="rel">
						<div class="row clearfix">
							<label for="province" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">高考所在地：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<input type="text" class="input form-control" id="province" name="province" required value="${user.province.name}" readonly>
								</div>
							</div>
							<div class="errInfo"></div>
						</div>
						
						<div class="row clearfix inline">
							<label for="score" class="control-label column col1 fl">
								<i class="icon-location icon-fenshu"></i>
								<em class="vm">高考分数：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib c-9" id="score" name="score" placeholder="请输入高考分数" min="0"  max="800" value="${score}" required> &nbsp;分
								</span>
							</div>
							<div class="errInfo">
							<span class="p-error">高考分数为0-750之间，请重新填写</span>
							<span class="p-error-empty">高考分数不能为空</span>
							</div>
						</div>

						<div class="row clearfix subjectsRow">
							<label for="subject" class="control-label column col1 fl">
								<i class="icon-location icon-book"></i>
								<em class="vm">选考科目：</em> 
								<p class="label-desc">（选择三门）</p> 
								</label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap"> 

<c:forEach var="subject" items="${subjectsAll}">
	<label for="subject_${subject.code}" class="label_check inline">
		<em class="icon-radio"></em>
		<input type="checkbox" class="input form-control" id="subject_${subject.code}" name="subject" value="${subject.code}" required n="${subject.name}" >
		<em class="vm">${subject.name}</em>
	</label>
</c:forEach>
									
								</div>
							</div>
							<div class="errInfo"></div>
						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>

							<div class="row btnRow">
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
			                        <em class="subTxt">下一步</em>
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
	<script>
		window.__INITDATA__ = ${subjects}
	</script>
	</body>
</html>