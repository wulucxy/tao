<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>


<section class="contentInner myInfo">
<div class="topWell">
	<em class="square vm"></em><span class="vm">我的资料</span>
</div>
<div class="content">
	<div class="formWrap">
		<form action="#" onsubmit="return false" autocomplete="off" id="myInfoForm" class="rel">
			<div class="row clearfix">
				<label for="name" class="control-label column col1 fl">
					<i class="icon-location"></i>
					<em class="vm">头像：</em></label>
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
				<label for="highYear" class="control-label column col1 fl">
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