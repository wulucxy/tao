<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
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
	
		<div class="container p_case_2">

			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考方案定制
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
						<li><a href="#"><em>输入基本信息</em></a></li>
						<li><a href="#"><em>选择志愿信息</em></a></li>
						<li class="current"><a href="#"><em>选择求学专业</em></a></li>
						<li><a href="#"><em>确认提交信息</em></a></li>
					</ul>
				</div>

				<div class="formWrap">
					<form action="#" onsubmit="return false" autocomplete="off" id="caseForm_2" class="rel">
						
						<div class="selectContent clearfix" id="majorSelectWrapper">
							<div class="row">
								<p class="g6 mb12">本科大类：</p>

								<label for="majorType1_1" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType1_1" name="majorType" required>
									<em class="vm">理科</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>

								<label for="majorType1_2" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType1_2" name="majorType" required>
									<em class="vm">经济学</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>


								<label for="majorType1_3" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType1_3" name="majorType" required>
									<em class="vm">经济学</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>

							</div>
							<div class="row">
								<p class="g6 mb12">专科大类：</p>

								<label for="majorType2_1" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType2_1" name="majorType" required>
									<em class="vm">理科</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>

								<label for="majorType2_2" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType2_2" name="majorType" required>
									<em class="vm">经济学</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>


								<label for="majorType2_3" class="label_radio">
									<em class="icon_radio"></em>
									<input type="radio" class="input form-control" id="majorType2_3" name="majorType" required>
									<em class="vm">经济学</em>
									<em class="icon-yes">
										<i></i>
									</em>
								</label>

							</div>

						</div>
						
						<div class="footerCnt">
							<div class="row btnRow">
							 	<a class="btn btn-positive btn-primary btn-form">
			                        <em class="subTxt">上一步</em>
			                    </a>
			                    <button class="btn btn-positive btn-form" id="verifyBtn">
			                        <em class="subTxt">确定</em>
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