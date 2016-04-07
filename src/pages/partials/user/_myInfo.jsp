<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>


<section class="contentInner myInfo">
<div class="topWell">
	<em class="square vm"></em><span class="vm">我的资料</span>
</div>
<div class="content">
	<div class="formWrap">
		<form action="#" onsubmit="return false" autocomplete="off" id="myInfoForm" class="rel">
			<!-- <div class="row clearfix">
				<label for="name" class="control-label column col1 fl">
					<i class="icon-location"></i>
					<em class="vm">头像：</em></label>
				<div class="col2 avatarWrap rel">
					<div class="avatar thumbnail rel" id="picker">
						<img src="${user.userAvatar}" class="responsive">
						<div class="info">编辑头像</div>
					</div>
				</div>
				<div class="errInfo">
					<span class="p-error-empty">头像不能为空</span>
				 </div>
			</div> -->
			<div class="row clearfix">
				<label for="name" class="control-label column col1 fl">
					<i class="icon-location"></i>
					<em class="vm">姓名：</em></label>
				<div class="col2 inputWrap rel">
					<div class="fieldWrap">
						<input type="text" class="input form-control" id="name" name="name" value="${user.userName}" required placeholder="请输入姓名">
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
						<input type="text" class="input form-control" id="mobile" name="mobile" required value="${user.mobile}" readonly >
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
						<input type="text" class="input form-control" id="area" name="area" required value="${user.province.name}" readonly required>
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
						<select class="form-control" name="sex" readonly required>
						<c:choose>
						    <c:when test="${user.sex == 1}">
						   		<option value="1" selected>男</option>
						   		<option value="2">女</option>
							</c:when>
							<c:when test="${user.sex == 2}">
								<option value="1">男</option>
						   		<option value="2" selected>女</option>
							</c:when>
							<c:otherwise>
								<option value="">请选择</option>
								<option value="1">男</option>
								<option value="2">女</option>
							</c:otherwise>
						</c:choose>
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
						<input type="text" class="input form-control addSchool" id="highSchool" name="highSchool" required value="${user.highSchool}" placeholder="请选择高中" >
					</div>
				</div>
				<div class="errInfo">
					<span class="p-error-empty">高中不能为空</span>
				 </div>
			</div>

			<div class="row clearfix">
				<label for="highYear" class="control-label column col1 fl">
					<i class="icon-location"></i>
					<em class="vm">入学年份：</em></label>
				<div class="col2 selectWrap rel">
					<div class="fieldWrap">
						
						<c:choose>
						    <c:when test="${user.highYear != 0}">
						   		<input type="text" class="input form-control" id="highYear" name="highYear" required value=${user.highYear}>
							</c:when>
							<c:otherwise>
								<select class="form-control" name="highYear" required>
									<option value="">请选择</option>
									<option value="2015">2015</option>
									<option value="2014">2014</option>
									<option value="2013">2013</option>
									<option value="2012">2012</option>
									<option value="2011">2011</option>
								</select>
							</c:otherwise>
						</c:choose>
					</div>
				</div>
				<div class="errInfo">
					<span class="p-error-empty">入学年份必选</span>
				 </div>
			</div>
			
			<div class="footerCnt">
				<p id="errTxt" class="errTxt"></p>

				<div class="row btnRow tc">
                    <button type="submit" class="btn btn-positive btn-form" id="verifyBtn">
                        <em class="subTxt">提&nbsp;交</em>
                    </button>
      			</div>

			</div>

		</form>
	</div>													
</div>
</section>