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
	
		<div class="container p_case_4">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						高考方案定制
						<em class="underLine"></em>	
					</span>
					<div class="fr f16 g6">
						<a class="setting trigger" data-trigger="info">
							<i class="settingIcon icon-setting"></i><em class="vm">我的信息</em>
						</a>
					</div>
				</h3>

				<div class="bg bg-e8 mb20 lh42 tc">结&nbsp;&nbsp;果</div>
				<div class="formWrap">
					
					<section class="caseSection">

					<h4 class="bg bg-f1">正常方案</h4>
					<c:forEach var="list" items="${conservative}" varStatus="loop">
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">${loop.index+1}</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">北京大学</em>
									<span class="badge green">985</span>
									<span class="badge red">211</span>
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">北京</span>
		<span class="label">院校分类：</span><span class="field">综合</span>
		<span class="label">院校性质：</span><span class="field">公办</span>
		<span class="label">院校层次：</span><span class="field">本科</span>
								</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td>专业名称</td>
												<td>所属科类</td>
												<td>上一年录取平均分</td>
											</tr>
											<tr>
												<td>化学工程与工艺</td>
												<td>工学</td>
												<td>679.2</td>
											</tr>
											<tr>
												<td>油气储运工程</td>
												<td>工学</td>
												<td>671.4</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>	

					</c:forEach>
						
						
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">2</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">北京大学</em>
									<span class="badge green">985</span>
									<span class="badge red">211</span>
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">北京</span>
		<span class="label">院校分类：</span><span class="field">综合</span>
		<span class="label">院校性质：</span><span class="field">公办</span>
		<span class="label">院校层次：</span><span class="field">本科</span>
								</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td>专业名称</td>
												<td>所属科类</td>
												<td>上一年录取平均分</td>
											</tr>
											<tr>
												<td>化学工程与工艺</td>
												<td>工学</td>
												<td>679.2</td>
											</tr>
											<tr>
												<td>油气储运工程</td>
												<td>工学</td>
												<td>671.4</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</section>
					<section class="caseSection">
						<h4 class="bg bg-f1">冲刺方案</h4>
						<div class="media detailContent">
						<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">1</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">北京大学</em>
									<span class="badge green">985</span>
									<span class="badge red">211</span>
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">北京</span>
		<span class="label">院校分类：</span><span class="field">综合</span>
		<span class="label">院校性质：</span><span class="field">公办</span>
		<span class="label">院校层次：</span><span class="field">本科</span>
								</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td>专业名称</td>
												<td>所属科类</td>
												<td>上一年录取平均分</td>
											</tr>
											<tr>
												<td>化学工程与工艺</td>
												<td>工学</td>
												<td>679.2</td>
											</tr>
											<tr>
												<td>油气储运工程</td>
												<td>工学</td>
												<td>671.4</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</section>
					<section class="caseSection">
						<h4 class="bg bg-f1">保留方案</h4>
						<div class="media detailContent">
							<a href="javascript:;" class="taoIcon toggleIcon toggle"></a>
							<span class="fl index">1</span>
							<div class="media-body">
								<h4 class="name badgeRow">
									<em class="badgetitle vm">北京大学</em>
									<span class="badge green">985</span>
									<span class="badge red">211</span>
								</h4>
								<div class="detail">
		<span class="label">院校属地：</span><span class="field">北京</span>
		<span class="label">院校分类：</span><span class="field">综合</span>
		<span class="label">院校性质：</span><span class="field">公办</span>
		<span class="label">院校层次：</span><span class="field">本科</span>
								</div>
								<div class="tableWrap">
									<table class="table table-bordered text-center">
										<tbody>
											<tr>
												<td>专业名称</td>
												<td>所属科类</td>
												<td>上一年录取平均分</td>
											</tr>
											<tr>
												<td>化学工程与工艺</td>
												<td>工学</td>
												<td>679.2</td>
											</tr>
											<tr>
												<td>油气储运工程</td>
												<td>工学</td>
												<td>671.4</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</section>
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