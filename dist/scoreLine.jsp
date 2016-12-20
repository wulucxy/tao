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
<link href="/static/web/css/vendors.da0ee6f1.css" rel="stylesheet"><link href="/static/web/css/scoreLine.e8c0711c.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存userId属性 -->
		<input type="hidden" name="userId" value="${user.userId}">

		<div class="container dbWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						分数线数据库
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						<form action="#" onsubmit="return false" autocomplete="off" id="scorelineForm" class="rel">
						

						<div class="row clearfix">
							<label for="courseType" class="control-label column col1 fl">
								<i class="scoreIcon icon-book"></i>
								<em class="vm">高考科类：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">  
								<label for="courseType_0" class="label_radio inline">
								<em class="icon-radio"></em>
								<input type="radio" class="input form-control" id="courseType_0" name="courseType" value="0" checked required>
								<em class="vm">理科</em>
								</label>

								<label for="courseType_1"  class="label_radio inline">
								<em class="icon-radio"></em>
								<input type="radio" class="input form-control" id="courseType_1" name="courseType" value="1" required>
								<em class="vm">文科</em>
								</label>
								</div>
							</div>
							<div class="errInfo"></div>
						</div>

						<div class="row clearfix">
							<label for="batch" class="control-label column col1 fl">
								<i class="scoreIcon icon-list"></i>
								<em class="vm">报考批次：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
									<label for="batch_1" class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="1" id="batch_1" name="batch" checked required>
									<em class="vm">第一批</em>
									</label>

									<label for="batch_2"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="2" id="batch_2" name="batch" required>
									<em class="vm">第二批</em>
									</label>

									<label for="batch_3"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="3" id="batch_3" name="batch" required>
									<em class="vm">第三批</em>
									</label>
									
								</div>
							</div>
							<div class="errInfo"></div>
						</div>
						
						<div class="row clearfix inline">
							<label for="primary" class="control-label column col1 fl">
								<i class="scoreIcon icon-school"></i>
								<em class="vm">主选学校：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib addSchool" id="primary" name="primary" placeholder="请输入主选学校">
								</span>
								<input type="hidden" name="primaryCode" class="hiddenCode">
								
								<input type="text" class="subCode hidden" name="primarySub" required>

							</div>
							<div class="errInfo">
								<span class="p-error"></span>
								<span class="p-error-empty">主选学校不能为空</span>
							</div>
						</div>

						<div class="row clearfix inline">
							<label for="second" class="control-label column col1 fl">
								<i class="scoreIcon icon-school"></i>
								<em class="vm">对比学校1：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib addSchool sub" id="second" name="second" placeholder="请输入对比学校1">
								</span>
								<input type="hidden" name="secondCode" class="hiddenCode">
								
								<input type="checkbox" class="hidden subCode" name="contrast" required>

							</div>
							<div class="errInfo">
								<span class="p-error">请选择不同的学校进行对比</span>
								<span class="p-error-empty">请选择一所学校进行对比</span>
							</div>
						</div>

						<div class="row clearfix inline">
							<label for="third" class="control-label column col1 fl">
								<i class="scoreIcon icon-school"></i>
								<em class="vm">对比学校2：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib addSchool sub" id="third" name="third" placeholder="请输入对比学校2" >
								</span>
								<input type="hidden" name="thirdCode" class="hiddenCode">

								<input type="checkbox" class="hidden subCode" name="contrast" required>
							</div>
							<div class="errInfo">
								
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

				<div class="col2 col2 fr">
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
	<script src="/static/web/js/vendors.b543b1f9.js"></script><script src="/static/web/js/scoreLine.6334c998.js"></script></body>
</html>