l<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<%@ include file = "/partials/_meta.jsp" %>
	<title>淘志愿</title>
<link href="/static/web/css/vendors.0cd2f40b.css" rel="stylesheet"><link href="/static/web/css/sampleEvaluate.bd04755c.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container bookContainer">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						样本预览
						<em class="underLine"></em>	
					</span>
				</h3>
				
				<div class="formWrap">
					<section class="sampleSection">
						<h4 class="bg bg-f1">我的信息</h4>
						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th>生源地</th>
										<th>科目</th>
										<th>批次</th>
										<th>分数</th>
										<th>名次</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>浙江</td>
										<td>理科</td>
										<td>第二批</td>
										<td>511</td>
										<td>28756</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<section class="sampleSection">
						<h4 class="bg bg-f1">我的方案</h4>
						
						<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">1</span>
							<div class="media-body">
								<div class="subTitle">长江大学</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="30%">专业名称</th>
										<th scope="col" width="17%">2015年专业平均分</th>
										<th scope="col" width="17%">2014年专业平均分</th>
										<th scope="col" width="17%">2013年专业平均分</th>
										<th scope="col" width="19%">填报建议</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>食品质量与安全</td>
										<td>524</td>
										<td>508</td>
										<td>522</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>建筑学</td>
										<td>528</td>
										<td>521</td>
										<td>535</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>城乡规划</td>
										<td>528</td>
										<td>521</td>
										<td>535</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>机械类</td>
										<td>528</td>
										<td>518</td>
										<td>532</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>土木类（中外合作办学）（土木工程）</td>
										<td>----</td>
										<td>470</td>
										<td>481</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>光源与照明</td>
										<td>----</td>
										<td>----</td>
										<td>517</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
								</tbody>
							</table>
						</div>
						</div>

						<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">2</span>
							<div class="media-body">
								<div class="subTitle">华北水利水电大学</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="30%">专业名称</th>
										<th scope="col" width="17%">2015年专业平均分</th>
										<th scope="col" width="17%">2014年专业平均分</th>
										<th scope="col" width="17%">2013年专业平均分</th>
										<th scope="col" width="19%">填报建议</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>城市地下空间工程</td>
										<td>----</td>
										<td>519</td>
										<td>513</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>水利水电工程</td>
										<td>561</td>
										<td>550</td>
										<td>549</td>
										<td class="red" >不建议填报</td>
									</tr>
									<tr>
										<td>农业水利工程</td>
										<td>----</td>
										<td>526</td>
										<td>526</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>港口航道与海岸工程</td>
										<td>535</td>
										<td>520</td>
										<td>524</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>水文与水资源工程</td>
										<td>----</td>
										<td>518</td>
										<td>524</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>土木工程</td>
										<td>540</td>
										<td>527</td>
										<td>519</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">3</span>
							<div class="media-body">
								<div class="subTitle">哈尔滨商业大学</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="30%">专业名称</th>
										<th scope="col" width="17%">2015年专业平均分</th>
										<th scope="col" width="17%">2014年专业平均分</th>
										<th scope="col" width="17%">2013年专业平均分</th>
										<th scope="col" width="19%">填报建议</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>物联网工程</td>
										<td>531</td>
										<td>509</td>
										<td>496</td>
										<td class="green">建议志愿平稳</td>
									</tr>
									<tr>
										<td>生物工程</td>
										<td>----</td>
										<td>491</td>
										<td>494</td>
										<td class="green">建议志愿保底</td>
									</tr>
									<tr>
										<td>物流管理</td>
										<td>537</td>
										<td>515</td>
										<td>505</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>会计学</td>
										<td>565</td>
										<td>553</td>
										<td>547</td>
										<td class="red">不建议填报</td>
									</tr>
									<tr>
										<td>工业工程</td>
										<td>----</td>
										<td>494</td>
										<td>482</td>
										<td class="green">建议志愿保底</td>
									</tr>
									<tr>
										<td>信息管理与信息系统</td>
										<td>530</td>
										<td>506</td>
										<td>505</td>
										<td class="green">建议志愿平稳</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>	

					<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">4</span>
							<div class="media-body">
								<div class="subTitle">长春大学</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="30%">专业名称</th>
										<th scope="col" width="17%">2015年专业平均分</th>
										<th scope="col" width="17%">2014年专业平均分</th>
										<th scope="col" width="17%">2013年专业平均分</th>
										<th scope="col" width="19%">填报建议</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>通信工程</td>
										<td>514</td>
										<td>495</td>
										<td>515</td>
										<td class="green">建议志愿平稳</td>
									</tr>
									<tr>
										<td>机械工程</td>
										<td>528</td>
										<td>517</td>
										<td>512</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>电气工程及其自动化</td>
										<td>517</td>
										<td>520</td>
										<td>513</td>
										<td class="green">建议志愿冲刺</td>
									</tr>
									<tr>
										<td>自动化</td>
										<td>514</td>
										<td>506</td>
										<td>509</td>
										<td class="green">建议志愿平稳</td>
									</tr>
									<tr>
										<td>测控技术与仪器</td>
										<td>513</td>
										<td>506</td>
										<td>509</td>
										<td class="green">建议志愿平稳</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">5</span>
							<div class="media-body">
								<div class="subTitle">河北地质大学</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="30%">专业名称</th>
										<th scope="col" width="17%">2015年专业平均分</th>
										<th scope="col" width="17%">2014年专业平均分</th>
										<th scope="col" width="17%">2013年专业平均分</th>
										<th scope="col" width="19%">填报建议</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>测绘工程</td>
										<td>498</td>
										<td>484</td>
										<td>496</td>
										<td class="green">建议志愿保底</td>
									</tr>
									<tr>
										<td>地质工程（综合找矿方向）</td>
										<td>526</td>
										<td>480</td>
										<td>489</td>
										<td class="green">建议志愿保底</td>
									</tr>
									<tr>
										<td>勘查技术与工程</td>
										<td>505</td>
										<td>482</td>
										<td>490</td>
										<td class="green">建议志愿保底</td>
									</tr>
									<tr>
										<td>工程造价</td>
										<td>----</td>
										<td>504</td>
										<td>495</td>
										<td class="green">建议志愿平稳</td>
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
	<script src="/static/web/js/vendors.eeb85896.js"></script><script src="/static/web/js/sampleEvaluate.e9969b98.js"></script></body>
</html>