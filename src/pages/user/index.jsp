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
	
		<div class="container ovh">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						<span class="vm">个人中心</span>
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="f-layout clearfix">
					<div class="column c-2 fl">
						<div class="colPad">

							<div class="m-sideNav">
								<div class="avatarWrap tc">
									<span class="imgWrap">
										<img src="http://placehold.it/148x148" class="responsive" alt="个人头像">
									</span>
									<p class="elipsis g3 mt10 f16">张珊李四</p>
								</div>
								<ul class="userInfoList">
									<li class="current"><a href="javascript:;" data-link="myInfo">我的资料</a></li>
									<li><a href="javascript:;" data-link="history">历史方案</a></li>
									<li><a href="javascript:;" data-link="achivement">我的成绩</a></li>
									<li><a href="javascript:;" data-link="collection">我的收藏</a></li>
									<li><a href="javascript:;" data-link="question">我的提问</a></li>
									<li><a href="javascript:;" data-link="order">我的预约</a></li>
									<li><a href="javascript:;" data-link="coupon">优惠券</a></li>
								</ul>
								<div class="kefu">
									<p>客服电话：</p>
									<p class="blue">0571-88888888</p>
									<p>工作时间：</p>
									<p>09:00～17:00</p>
								</div>
							</div>

						</div>
					</div>
					<div class="column c-8 fl">
						<div class="colPad">
							
							<div class="contentWrap">
								<div class="well">
									<em class="square vm"></em><span class="vm">我的资料</span>
								</div>
								<div id="content" class="myInfo contentInner">
									<div class="formWrap">
										<form action="#" onsubmit="return false" autocomplete="off" id="myInfoForm" class="rel">
											<div class="row clearfix">
												<label for="name" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">姓名：</em></label>
												<div class="col2 inputWrap rel">
													<div class="fieldWrap">
														<input type="text" class="input form-control" id="name" name="name" required placeholder="请输入姓名">
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error-empty">姓名不能为空</span>
												 </div>
											</div>
											
											<div class="row clearfix">
												<label for="mobile" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">手机号：</em></label>
												<div class="col2 inputWrap rel">
													<div class="fieldWrap">
														<input type="text" class="input form-control" id="mobile" name="mobile" required placeholder="请输入手机号">
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error">手机号为11位数字，请重新填写</span>
													<span class="p-error-empty">手机号不能为空</span>
												 </div>
											</div>

											<div class="row clearfix">
												<label for="area" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">生源地：</em></label>
												<div class="col2 inputWrap rel">
													<div class="fieldWrap">
														<input type="text" class="input form-control" id="area" name="area" required placeholder="请输入生源地">
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error-empty">生源地不能为空</span>
												 </div>
											</div>

											<div class="row clearfix">
												<label for="sex" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">性别：</em></label>
												<div class="col2 selectWrap rel">
													<div class="fieldWrap">
														<select class="form-control" name="sex">
															  <option value="1">男</option>
															  <option value="2">女</option>
															</select>
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error-empty">性别不能为空</span>
												 </div>
											</div>


											<div class="row clearfix">
												<label for="highSchool" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">高中：</em></label>
												<div class="col2 inputWrap rel">
													<div class="fieldWrap">
														<input type="text" class="input form-control" id="highSchool" name="highSchool" required placeholder="请输入高中名称">
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error-empty">高中不能为空</span>
												 </div>
											</div>

											<div class="row clearfix">
												<label for="sex" class="control-label column col1 fl">
													<i class="icon-location"></i>
													<em class="vm">入学年份：</em></label>
												<div class="col2 selectWrap rel">
													<div class="fieldWrap">
														<select class="form-control" name="highYear">
															  <option value="2012">2012</option>
															  <option value="2011">2011</option>
															</select>
													</div>
												</div>
												<div class="errInfo">
													<span class="p-error-empty">高中入学年份不能为空</span>
												 </div>
											</div>
											
											<div class="footerCnt">
												<p id="errTxt" class="errTxt"></p>

												<div class="row btnRow tc">
								                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
								                        <em class="subTxt">下一步</em>
								                    </button>
					                  			</div>

											</div>

										</form>
									</div>													
								</div>
							</div>
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