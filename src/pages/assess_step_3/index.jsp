<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>高考志愿</title>
	</head>
<body>
	<!-- 公共头部 -->
	<%--  <%@ include file = "/partials/_header.jsp" %> --%>
	<%@ include file = "/partials/_header.jsp" %>

	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
		<div class="container p_assess_1">

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
						<li><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li><a href="javascript:;"><em>选择志愿信息</em></a></li>
						<li class="current"><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="assessForm_3" class="rel">
					<section class="p1">
							<div class="row clearfix">
								<label for="province" class="control-label column col1 fl">
									<i class="icon-location"></i>
									<em class="vm">高考所在地：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap">
										<span class="onlyTxt">${province.name}</span>
									</div>
								</div>
							</div>
							
							<div class="row clearfix">
								<label for="courseType" class="control-label column col1 fl">
									<i class="icon-location icon-book"></i>
									<em class="vm">高考科目：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap">
									<c:choose>
									    <c:when test="${courseType == 1}">
									   		<label for="courseType_1"  class="label_radio inline">
											<em class="icon-radio"></em>
											<input type="radio" class="input form-control" id="courseType_1" name="courseType" checked required readonly>
											<em class="vm">理科</em>
											</label>
										</c:when>
										<c:otherwise>
											<label for="courseType_0" class="label_radio inline">
											<em class="icon-radio"></em>
											<input type="radio" class="input form-control" id="courseType_0" name="courseType" checked required readonly>
											<em class="vm">文科</em>
											</label>
										</c:otherwise>
								   </c:choose>	
									</div>
								</div>
							</div>


							<div class="row clearfix">
								<label for="courseType" class="control-label column col1 fl">
									<i class="icon-location icon-list"></i>
									<em class="vm">报考批次：</em></label>
								<div class="col2 inputWrap rel">
									<div class="fieldWrap">
										<c:choose>
									    <c:when test="${batch == 1}">
									   		<label for="batch_1" class="label_radio inline">
											<em class="icon-radio"></em>
											<input type="radio" class="input form-control" value="1" id="batch_1" name="batch" checked required readonly>
											<em class="vm">第一批</em>
											</label>
										</c:when>
										<c:when test="${batch == 2}">
											<label for="batch_2"  class="label_radio inline">
											<em class="icon-radio"></em>
											<input type="radio" class="input form-control" value="2" id="batch_2" name="batch" checked required readonly>
											<em class="vm">第二批</em>
											</label>
										</c:when>
										<c:otherwise>
											<label for="batch_3"  class="label_radio inline">
											<em class="icon-radio"></em>
											<input type="radio" class="input form-control" value="3" id="batch_3" name="batch" checked required readonly>
											<em class="vm">第三批</em>
											</label>
										</c:otherwise>
								   </c:choose>		
									</div>
								</div>
							</div>

							
							<div class="row clearfix inline">
								<label for="score" class="control-label column col1 fl">
									<i class="icon-location icon-fenshu"></i>
									<em class="vm">高考分数：</em></label>
								<div class="col2 inputWrap rel">
									<span class="fieldWrap">
										<span class="onlyTxt">${score}&nbsp;分</span>
									</span>
								</div>
							</div>

							<div class="row clearfix inline">
								<label for="place" class="control-label column col1 fl">
									<i class="icon-location icon-rank"></i>
									<em class="vm">高考排名：</em></label>
								<div class="col2 inputWrap rel">
									<span class="fieldWrap">
										<span class="onlyTxt">${place}&nbsp;名</span>
									</span>
								</div>
							</div>
						</section>

						<section class="p2">
							<div class="cInfo">
								<div class="bg bg-f1">志愿学校1：</div>
								<div class="collegeList">
									<span class="n">aaa</span>
									<span class="c">bbb</span>
									<span class="c">ccc</span>
									<span class="c">ddd</span>
								</div>
							</div>
							<div class="cInfo">
								<div class="bg bg-f1">志愿学校2：</div>
								<div class="collegeList">
									<span class="n">aaa</span>
									<span class="c">bbb</span>
									<span class="c">ccc</span>
									<span class="c">ddd</span>
								</div>
							</div>

							<div class="cInfo">
								<div class="bg bg-f1">志愿学校3：</div>
								<div class="collegeList">
									<span class="n">无</span>
								</div>
							</div>						
	

						</section>

						
						<div class="footerCnt">
							<p id="errTxt" class="errTxt"></p>
							
							<div class="row btnRow">
							 	<a class="btn btn-positive btn-primary btn-form">
			                        <em class="subTxt">返回修改</em>
			                    </a>
			                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
			                        <em class="subTxt">提交</em>
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