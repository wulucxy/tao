<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>高考志愿</title>
	<link href="/static/web/css/vendors.f9f66a08.css" rel="stylesheet"><link href="/static/web/css/aboard.6466761e.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存mobile属性 -->
		<input type="hidden" name="mobile" value="${user.mobile}">

		<div class="container aboard">

			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						留学方案定制
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="aboardForm" class="rel">
						<div class="row clearfix">
							<label for="country" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">国家：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<div class="selectWrap beautify-select" id="countrySelect">
									 <div class="trigger usn" data-toggle>
									 	<span class="triggerTxt">请选择</span>
									 </div>
									 <ul class="options">
									 	<c:forEach var="list" items="${countryList}">
				  							<li code="${list.code}" name="${list.name}">${list.name}</li>
										</c:forEach>
									 </ul>
									</div>
									<input type="hidden" name="country" noPtnCheck=true  required>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error"></span>
								<span class="p-error-empty">国家不能为空</span>
							</div>
						</div>

						<div class="row clearfix">
							<label for="statesSelect" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">地区：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<div class="selectWrap beautify-select" id="statesSelect">
									 <div class="trigger usn" data-toggle>
									 	<span class="triggerTxt">请选择</span>
									 </div>
									 <ul class="options">
									 	<li code="1" name="德州">德州</li>
									 	<li code="1" name="杭州">杭州</li>
									 </ul>
									</div>
									<input type="hidden" name="states_cn" noPtnCheck=true  required>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error"></span>
								<span class="p-error-empty">地区不能为空</span>
							</div>
						</div>
						
						<div class="row clearfix">
							<label for="degree" class="control-label column col1 fl">
								<i class="icon-location icon-book"></i>
								<em class="vm">阶段（学历）：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">  
									<label for="degree_1" class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" id="degree_1" name="degree" value="1" checked required>
									<em class="vm">本科</em>
									</label>

									<label for="degree_2"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" id="degree_2" name="degree" value="3" required>
									<em class="vm">大专</em>
									</label>

									<label for="degree_3" class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" id="degree_3" name="degree" value="3" required>
									<em class="vm">高中</em>
									</label>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error"></span>
								<span class="p-error-empty">阶段学历不能为空</span>
							</div>
						</div>
						
						<div class="row clearfix inline">
							<label for="major_key" class="control-label column col1 fl">
								<i class="icon-location icon-fenshu"></i>
								<em class="vm">专业关键词：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib c-8" id="major_key" name="major_key" placeholder="请输入关键词" pattern="^[0-9]{1,3}" > &nbsp;（选填）
								</span>
							</div>
							<div class="errInfo">
							</div>
						</div>

						<div class="row clearfix">
							<label for="exam_typeSelect" class="control-label column col1 fl">
								<i class="icon-location"></i>
								<em class="vm">考试类型编码：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<div class="selectWrap beautify-select" id="exam_typeSelect">
									 <div class="trigger usn" data-toggle>
									 	<span class="triggerTxt">请选择</span>
									 </div>
									 <ul class="options">
									 	<li code="1" name="托福">托福</li>
									 	<li code="1" name="雅思">雅思</li>
									 </ul>
									</div>
									<input type="hidden" name="exam_type" noPtnCheck=true required>
								</div>
							</div>
							<div class="errInfo">
								<span class="p-error"></span>
								<span class="p-error-empty">考试类型编码不能为空</span>
							</div>
						</div>

						
						<div class="row clearfix inline">
							<label for="exam_score" class="control-label column col1 fl">
								<i class="icon-location icon-fenshu"></i>
								<em class="vm">考试分数：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib" id="exam_score" name="exam_score" placeholder="请输入考试分数" pattern="^[0-9]{1,3}" required>
								</span>
							</div>
							<div class="errInfo">
							<span class="p-error">考试分数为1-3位数字，请重新填写</span>
							<span class="p-error-empty">考试分数不能为空</span>
							</div>
						</div>

						<div class="row clearfix inline">
							<label for="gpa_score" class="control-label column col1 fl">
								<i class="icon-location icon-rank"></i>
								<em class="vm">GPA分数：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
									<input type="text" class="input form-control dib" id="gpa_score" name="gpa_score" placeholder="请输入GPA分数" pattern="^[0-9]{1,8}" required>
								</span>
							</div>
							<div class="errInfo">
							<span class="p-error">GPA分数为数字，请重新填写</span>
							<span class="p-error-empty">GPA分数不能为空</span>
							</div>
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/aboard.js"></script></body>
</html>