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
<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/bookStep4.55aaf198.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">

		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<!-- 保存mobile属性 -->
		<input type="hidden" name="mobile" value="${user.mobile}">

		<div class="container bookContainer">
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
						<li><a href="javascript:;"><em>输入基本信息</em></a></li>
						<li><a href="javascript:;"><em>选择求学地区</em></a></li>
						<li><a href="javascript:;"><em>选择求学专业</em></a></li>
						<li class="current"><a href="javascript:;"><em>确认提交信息</em></a></li>
					</ul>
				</div>
				

				<div class="formWrap">
				 <form class="modalSubCnt" id="bookForm" onsubmit="return false;" autocomplete="off">
				
				 <input type="hidden" name="mobile" value="${mobile}">

				<div class="row clearfix">
				  <label for="province" class="control-label column col1 fl">
				    <i class="icon-location"></i>
				    <em class="vm">高考所在地：</em></label>
				  <div class="col2 selectWrap rel">
				    <div class="fieldWrap lh34">
				      <span>${user.province.name}</span>
				      <input type="hidden" name="province" value="${user.province.code}">
				    </div>
				  </div>
				</div>

				<div class="row clearfix">
				  <label for="province" class="control-label column col1 fl">
				    <i class="icon-location icon-newuser"></i>
				    <em class="vm">姓名：</em></label>
				  <div class="col2 inputWrap rel">
				    <div class="fieldWrap lh34">
				      <span>${user.userName}</span>
				    </div>
				  </div>
				</div>
				
				<div class="row clearfix inline">
				  <label for="score" class="control-label column col1 fl">
				    <i class="icon-location icon-fenshu"></i>
				    <em class="vm">高考分数：</em></label>
				  <div class="col2 inputWrap rel">
				    <div class="fieldWrap lh34">
				      <span>${score}分</span>
				      <input type="hidden" name="score" value="${score}">
				    </div>
				  </div>
				</div>

				<div class="row clearfix">
				  <label for="subjects" class="control-label column col1 fl">
				    <i class="icon-location icon-book"></i>
				    <em class="vm">选考科目：</em></label>
				  <div class="col2 inputWrap rel">
				    <div class="fieldWrap">
					   	
					<c:forEach var="list" items="${subjects}" varStatus="loop">
				      <label for="subjectId_${list.code}" class="label_check inline">
				      <em class="icon-radio"></em>
				      <input type="checkbox" class="input form-control" id="subjectId_${list.code}" subjectname="${list.name}" name="subjectId" value="${list.code}" disabled checked>
				      <em class="vm">${list.name}</em>
				      </label>
				    </c:forEach>

				    </div>
				  </div>
				</div>

				<div class="row clearfix">
				  <label for="courseType" class="control-label column col1 fl">
				    <i class="icon-location icon-hat"></i>
				    <em class="vm">专业选择：</em></label>
				  <div class="col2 inputWrap rel">
				    <div class="fieldWrap">
					<c:choose>
				     <c:when test="${empty majorList}">
				     	<label for="majorId_" class="label_check inline">
					      <em class="icon-radio"></em>
					      <input type="checkbox" class="input form-control" id="majorId_" name="majorId" value="" disabled checked>
					      <em class="vm">全部</em>
					    </label>
					 </c:when>
					<c:otherwise>
				     <c:forEach var="list" items="${majorList}" varStatus="loop">
				      <label for="majorId_${list.majorId}" class="label_check inline">
				      <em class="icon-radio"></em>
				      <input type="checkbox" class="input form-control" id="majorId_${list.majorId}" majorname="${list.majorName}" name="majorId" value="${list.majorId}" disabled checked>
				      <em class="vm">${list.majorName}</em>
				      </label>
				      </c:forEach>

				    </c:otherwise>
				   </c:choose>
				    </div>
				  </div>
				</div>

				<div class="row clearfix">
				  <label for="courseType" class="control-label column col1 fl">
				    <i class="icon-location icon-street"></i>
				    <em class="vm">地区选择：</em></label>
				  <div class="col2 inputWrap rel">
				    <div class="fieldWrap">
					
					<c:choose>
				    <c:when test="${empty c}">
				   		<label for="city_" class="label_check inline">
				      <em class="icon-radio"></em>
				      <input type="checkbox" class="input form-control" id="city_" name="city" value="" disabled checked>
				      <em class="vm">全部</em>
				      </label>
					</c:when>
					<c:otherwise>
				    <c:forEach var="list" items="${c}" varStatus="loop">
				      <label for="city_${list.code}" class="label_check inline">
				      <em class="icon-radio"></em>
				      <input type="checkbox" class="input form-control" id="city_${list.code}" cityname="${list.name}" name="city" value="${list.code}" disabled checked>
				      <em class="vm">${list.name}</em>
				      </label>
				    </c:forEach>
				    </c:otherwise>
				   </c:choose>
				    </div>
				  </div>
				</div>
				
				<div class="footerCnt">
					<div class="row btnRow">
					 	<a class="btn btn-positive btn-primary btn-form" href="/box/plan/book_step3">
	                        <em class="subTxt">返回修改</em>
	                    </a>
	                    <button class="btn btn-positive btn-form" id="nBtn" type="submit">
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
	<script src="/static/web/js/vendors.02bb6bf1.js"></script><script src="/static/web/js/bookStep4.fdec4c74.js"></script></body>
</html>