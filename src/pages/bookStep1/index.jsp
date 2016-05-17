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
						高考志愿定制
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
						<li><a href="javascript:;"><em>选择求学地区</em></a></li>
						<li><a href="javascript:;"><em>选择求学专业</em></a></li>
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
									<input type="text" class="input form-control" id="province" name="province" required value=${user.province.name} readonly>
								</div>
							</div>
							<div class="errInfo"></div>
						</div>
						
						<div class="row clearfix">
							<label for="courseType" class="control-label column col1 fl">
								<i class="icon-location icon-book"></i>
								<em class="vm">高考科类：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">  
								<c:choose>
								   <c:when test="${courseType == 0 }">
										<label for="courseType_0" class="label_radio inline">
										<em class="icon-radio"></em>
										<input type="radio" class="input form-control" id="courseType_0" name="courseType" value="0" checked required>
										<em class="vm">理科</em>
										</label>

										<label for="courseType_1"  class="label_radio inline">
										<em class="icon-radio"></em>
										<input type="radio" class="input form-control" id="courseType_1" name="courseType" value="1"  required>
										<em class="vm">文科</em>
										</label>
									</c:when>
									<c:when test="${courseType == 1 }">
										<label for="courseType_0" class="label_radio inline">
										<em class="icon-radio"></em>
										<input type="radio" class="input form-control" id="courseType_0" name="courseType" value="0" required>
										<em class="vm">理科</em>
										</label>

										<label for="courseType_1"  class="label_radio inline">
										<em class="icon-radio"></em>
										<input type="radio" class="input form-control" id="courseType_1" name="courseType" value="1"  checked required>
										<em class="vm">文科</em>
										</label>
									</c:when>
									<c:otherwise>
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
									</c:otherwise>
								</c:choose>
								</div>
							</div>
							<div class="errInfo"></div>
						</div>

						<div class="row clearfix">
							<label for="batch" class="control-label column col1 fl">
								<i class="icon-location icon-list"></i>
								<em class="vm">报考批次：</em></label>
							<div class="col2 inputWrap rel">
								<div class="fieldWrap">
								<c:choose>
								   <c:when test="${batch == 1 }">
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
									</c:when>
									<c:when test="${batch == 2 }">
									<label for="batch_1" class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="1" id="batch_1" name="batch" required>
									<em class="vm">第一批</em>
									</label>

									<label for="batch_2"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="2" id="batch_2" name="batch" checked required>
									<em class="vm">第二批</em>
									</label>

									<label for="batch_3"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="3" id="batch_3" name="batch" required>
									<em class="vm">第三批</em>
									</label>
									</c:when>
									<c:when test="${batch == 3 }">
									<label for="batch_1" class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="1" id="batch_1" name="batch" required>
									<em class="vm">第一批</em>
									</label>

									<label for="batch_2"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="2" id="batch_2" name="batch" required>
									<em class="vm">第二批</em>
									</label>

									<label for="batch_3"  class="label_radio inline">
									<em class="icon-radio"></em>
									<input type="radio" class="input form-control" value="3" id="batch_3" name="batch" checked required>
									<em class="vm">第三批</em>
									</label>
									</c:when>
									<c:otherwise>
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
									</c:otherwise>
								</c:choose>
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
								<input type="text" class="input form-control dib c-9" id="score" name="score" placeholder="请输入高考分数" min="0" max="800" value="${score}" required> &nbsp;分
								</span>
							</div>
							<div class="errInfo">
							<span class="p-error">高考分数为0-800之间，请重新填写</span>
							<span class="p-error-empty">高考分数不能为空</span>
							</div>
						</div>

						<div class="row clearfix inline">
							<label for="place" class="control-label column col1 fl">
								<i class="icon-location icon-rank"></i>
								<em class="vm">高考排名：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
									<input type="text" class="input form-control dib c-9" id="place" name="place" placeholder="请输入高考排名" pattern="^[0-9]{1,8}$" value="${place}" required> &nbsp;名
								</span>
							</div>
							<div class="errInfo">
							<span class="p-error">高考排名为1-8位数字，请重新填写</span>
							<span class="p-error-empty">高考排名不能为空</span>
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
	</body>
</html>