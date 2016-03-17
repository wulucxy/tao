<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.5dd41735.css" rel="stylesheet"><link href="/static/web/css/score.a4085b22.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
	<!-- 保存province属性 -->
	<input type="hidden" name="province" value="${user.province.code}">
	
	<div class="container scoreContainer">
		<div class="content">	
			<h3 class="clearfix title">
				<span class="fl s-title">
					成绩管理
					<em class="underLine"></em>	
				</span>
			</h3>
			
			<div class="formWrap">
				
				<div id="charts"></div>
				
				<div class="recommend f15 tc">
					
				</div>
				
				<div class="tableWrap">
					<table class="table table-bordered text-center" id="scoreTable">
						<thead>
							<tr>
								<th class="top" colspan=4>我的成绩单</th>
							</tr>
							<tr>
								<th>考试时间</th>
								<th>科目</th>
								<th>成绩</th>
								<th>年级排名</th>
							</tr>
						</thead>
						<tbody>
							
							
						</tbody>

					</table>
				</div>

			</div>

		</div>
	</div>


	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/score.js"></script></body>
</html>