<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
</head>
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
						<form action="#" onsubmit="return false" autocomplete="off" id="aboardForm" class="rel">
						

						<div class="row clearfix">
							<label for="courseType" class="control-label column col1 fl">
								<i class="icon-location icon-book"></i>
								<em class="vm">高考科目：</em></label>
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
							<label for="courseType" class="control-label column col1 fl">
								<i class="icon-location icon-list"></i>
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
								<i class="icon-location icon-fenshu"></i>
								<em class="vm">专业关键词：</em></label>
							<div class="col2 inputWrap rel">
								<span class="fieldWrap">
								<input type="text" class="input form-control dib c-8" id="primary" name="primary" placeholder="请输入关键词" > &nbsp;（选填）
								</span>
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
						<div class="directs">
							<ul>
								<c:forEach var="list" items="${adList}">
								<li><a href="${list.href}" target="_blank">
									<img src="${list.imgUrl}" >
								</a></li>
								</c:forEach>
							</ul>
						</div>
					</div>
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