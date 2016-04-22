<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.b920cd5d.css" rel="stylesheet"><link href="/static/web/css/sampleWishes.bd04755c.css" rel="stylesheet"></head>
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
										<th>求学地区</th>
										<th>求学专业</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>浙江</td>
										<td>理科</td>
										<td>第二批</td>
										<td>542</td>
										<td>9069</td>
										<td>天津市、温州市、舟山市、杭州市、嘉兴市</td>
										<td>工学</td>
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
								<div class="subTitle">冲一冲（可做A、B志愿）</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="20%">学校名称和历史投档线</th>
										<th scope="col" width="20%">专业名称</th>
										<th scope="col" width="20%">2015年专业平均分</th>
										<th scope="col" width="20%">2014年专业平均分</th>
										<th scope="col" width="20%">2013年专业平均分</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div class="collegeInfo">
												<p class="collegeName">浙江中医药大学</p>
												<p>历史投档线：</p>
												<p>2013年：552</p>
												<p>2014年：538</p>
												<p>2015年：536</p>
											</div>
										</td>
										<td>生物工程</td>
										<td>----</td>
										<td>----</td>
										<td>544.0</td>
									</tr>
									<tr>
										<td rowspan="2">
											<div class="collegeInfo">
												<p class="collegeName">天津科技大学</p>
												<p>历史投档线：</p>
												<p>2013年：545</p>
												<p>2014年：509</p>
												<p>2015年：532</p>
											</div>
										</td>
										<td>机械设计制造及其自动化</td>
										<td>----</td>
										<td>----</td>
										<td>544.0</td>
									</tr>
									<tr>
										<td>计算机科学与技术</td>
										<td>----</td>
										<td>----</td>
										<td>545.0</td>
									</tr>
									<tr>
										<td rowspan="3">
											<div class="collegeInfo">
												<p class="collegeName">天津工业大学</p>
												<p>历史投档线：</p>
												<p>2013年：549</p>
												<p>2014年：537</p>
												<p>2015年：542</p>
											</div>
										</td>
										<td>复合材料与工程</td>
										<td>552.0</td>
										<td>540.0</td>
										<td>545.0</td>
									</tr>
									<tr>
										<td>化学工程与工艺</td>
										<td>550.0</td>
										<td>540.0</td>
										<td>544.0</td>
									</tr>
									<tr>
										<td>制药工程</td>
										<td>552.0</td>
										<td>532.0</td>
										<td>546.0</td>
									</tr>
									<tr>
										<td rowspan="1">
											<div class="collegeInfo">
												<p class="collegeName">温州大学</p>
												<p>历史投档线：</p>
												<p>2013年：547</p>
												<p>2014年：535</p>
												<p>2015年：542</p>
											</div>
										</td>
										<td>环境工程</td>
										<td>552.0/td>
										<td>548.0</td>
										<td>536.0</td>
									</tr>
								</tbody>
							</table>
						</div>
						</div>
<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">2</span>
							<div class="media-body">
								<div class="subTitle">平一平（可做C、D志愿）</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="20%">学校名称和历史投档线</th>
										<th scope="col" width="20%">专业名称</th>
										<th scope="col" width="20%">2015年专业平均分</th>
										<th scope="col" width="20%">2014年专业平均分</th>
										<th scope="col" width="20%">2013年专业平均分</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td rowspan="4">
											<div class="collegeInfo">
												<p class="collegeName">嘉兴学院</p>
												<p>历史投档线：</p>
												<p>2013年：528</p>
												<p>2014年：514</p>
												<p>2015年：523</p>
											</div>
										</td>
										<td>软件工程</td>
										<td>----</td>
										<td>520.0<</td>
										<td>532.0</td>
									</tr>
									<tr>
										<td>服装设计与工程</td>
										<td>532.0</td>
										<td>519.0</td>
										<td>544.0</td>
									</tr>
									<tr>
										<td>建筑环境与能源应用工程</td>
										<td>531.0</td>
										<td>517.0</td>
										<td>532.0</td>
									</tr>
									<tr>
										<td>制药工程</td>
										<td>----</td>
										<td>----</td>
										<td>530.0</td>
									</tr>
									<tr>
										<td>
											<div class="collegeInfo">
												<p class="collegeName">天津中医药大学</p>
												<p>历史投档线：</p>
												<p>2013年：539</p>
												<p>2014年：531</p>
												<p>2015年：520</p>
											</div>
										</td>
										<td>制药工程</td>
										<td>----</td>
										<td>----</td>
										<td>530.0</td>
									</tr>
									<tr>
										<td rowspan="2">
											<div class="collegeInfo">
												<p class="collegeName">浙江海洋大学</p>
												<p>历史投档线：</p>
												<p>2013年：531</p>
												<p>2014年：519</p>
												<p>2015年：528</p>
											</div>
										</td>
										<td>安全工程</td>
										<td>532.0</td>
										<td>520.0</td>
										<td>531.0</td>
									</tr>
									<tr>
										<td>海洋汽油工程</td>
										<td>----</td>
										<td>522.0</td>
										<td>533.0</td>
									</tr>
									<tr>
										<td rowspan="2">
											<div class="collegeInfo">
												<p class="collegeName">浙江大学城市学院</p>
												<p>历史投档线：</p>
												<p>2013年：517</p>
												<p>2014年：502</p>
												<p>2015年：515</p>
											</div>
										</td>
										<td>软件工程</td>
										<td>526.0</td>
										<td>510.0<</td>
										<td>538.0</td>
									</tr>
									<tr>
										<td>道路桥梁与渡河工程</td>
										<td>----</td>
										<td>517.0</td>
										<td>534.0</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="subSampleSection">
						<div class="detailContent media">
							<span class="fl index">3</span>
							<div class="media-body">
								<div class="subTitle">保一保（可做D、E、F志愿）</div>
							</div>
						</div>

						<div class="tableWrap">
							<table class="table table-bordered text-center">
								<thead>
									<tr>
										<th scope="col" width="20%">学校名称和历史投档线</th>
										<th scope="col" width="20%">专业名称</th>
										<th scope="col" width="20%">2015年专业平均分</th>
										<th scope="col" width="20%">2014年专业平均分</th>
										<th scope="col" width="20%">2013年专业平均分</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div class="collegeInfo">
												<p class="collegeName">天津商业大学</p>
												<p>历史投档线：</p>
												<p>2013年：550</p>
												<p>2014年：532</p>
												<p>2015年：445</p>
											</div>
										</td>
										<td>能源与动力工程</td>
										<td>----</td>
										<td>546.0</td>
										<td>491.0</td>
									</tr>
									<tr>
										<td rowspan="2">
											<div class="collegeInfo">
												<p class="collegeName">天津职业技术师范大学</p>
												<p>历史投档线：</p>
												<p>2013年：498</p>
												<p>2014年：512</p>
												<p>2015年：495</p>
											</div>
										</td>
										<td>汽车服务工程(师范)</td>
										<td>530.0</td>
										<td>500.0<</td>
										<td>506.0</td>
									</tr>
									<tr>
										<td>电子科学与技术</td>
										<td>519.0</td>
										<td>513.0</td>
										<td>503.0</td>
									</tr>
									<tr>
										<td rowspan="4">
											<div class="collegeInfo">
												<p class="collegeName">天津城建大学</p>
												<p>历史投档线：</p>
												<p>2013年：543</p>
												<p>2014年：534</p>
												<p>2015年：435</p>
											</div>
										</td>
										<td>地质工程</td>
										<td>544.0</td>
										<td>534.0<</td>
										<td>481.0</td>
									</tr>
									<tr>
										<td>道路桥梁与渡河工程</td>
										<td>550.0</td>
										<td>543.0</td>
										<td>478.0</td>
									</tr>
									<tr>
										<td>港口河道与海岸工程</td>
										<td>553.0</td>
										<td>543.0</td>
										<td>479.0</td>
									</tr>
									<tr>
										<td>网络工程</td>
										<td>544.0</td>
										<td>538.0</td>
										<td>491.0</td>
									</tr>
									<tr>
										<td>
											<div class="collegeInfo">
												<p class="collegeName">浙江水利水电学院</p>
												<p>历史投档线：</p>
												<p>2013年：516</p>
												<p>2014年：502</p>
												<p>2015年：513</p>
											</div>
										</td>
										<td>水文与水利资源工程</td>
										<td>----</td>
										<td>508.0<</td>
										<td>519.0</td>
									</tr>
								</tbody>
							</table>
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
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/sampleWishes.js"></script></body>
</html>