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
	<link href="/static/web/css/vendors.f2b77075.css" rel="stylesheet"><link href="/static/web/css/evaluateStep1.f8df706c.css" rel="stylesheet"></head>
<body>
	

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

<label for="subject_1" class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_1" name="subject" value="1" required n="物理" >
									<em class="vm">物理</em>
									</label>

									<label for="subject_2"  class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_2" name="subject" value="2" n="化学" required>
									<em class="vm">化学</em>
									</label>

									<label for="subject_3" class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_3" name="subject" value="3" n="生物" required>
									<em class="vm">生物</em>
									</label>

									<label for="subject_4"  class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_4" name="subject" value="4" n="技术" required>
									<em class="vm">技术</em>
									</label>

									<label for="subject_5" class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_5" name="subject" value="5" n="政治"  required>
									<em class="vm">政治</em>
									</label>

									<label for="subject_6"  class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_6" name="subject" value="6" n="历史" required>
									<em class="vm">历史</em>
									</label>

									<label for="subject_7"  class="label_check inline">
									<em class="icon-radio"></em>
									<input type="checkbox" class="input form-control" id="subject_7" name="subject" value="7" n="地理" required>
									<em class="vm">地理</em>
									</label>
									
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error">请选择3门选考科目</span>
								<span class="p-error-empty">选考科目不能为空</span>
							</div>
						</div>
						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>

							<div class="row btnRow">
								<a class="btn btn-primary btn-form mr30" href="/box/plan/result?planId=31744" target="_blank">
			                        <em class="subTxt">查看样本</em>
			                    </a>
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
		
		<c:forEach var="subject" items="${subjects}">
			<input type="hidden" class="subjectInput" name="${subject.name}" value="${subject.code}">
		</c:forEach>	

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.dfc5fba9.js"></script><script src="/static/web/js/evaluateStep1.469f2fac.js"></script></body>
</html>