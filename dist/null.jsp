<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"></head>
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
										<th>电话</th>
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
										<td>18226920498</td>
										<td>浙江</td>
										<td>理科</td>
										<td>第二批</td>
										<td>521</td>
										<td>52133</td>
										<td>成都市、杭州市、上海市、西安市</td>
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
										<td rowspan="2">
											<div class="collegeInfo">
												<p class="collegeName">四川师范大学</p>
												<p>历史投档线：</p>
												<p>2013年：— —</p>
												<p>2014年：497</p>
												<p>2015年：483</p>
											</div>
										</td>
										<td>计算机科学与技术</td>
										<td>493</td>
										<td>439</td>
										<td>--</td>
									</tr>
									<tr>
										<td>软件工程</td>
										<td>590</td>
										<td>581</td>
										<td>567</td>
									</tr>
									<tr>
										<td rowspan="2"><div class="collegeInfo">
												<p class="collegeName">西南民族大学</p>
												<p>历史投档线：</p>
												<p>2013年：498</p>
												<p>2014年：512</p>
												<p>2015年：495</p>
											</div></td>
										<td>网络工程</td>
										<td>512</td>
										<td>500</td>
										<td>514</td>
									</tr>
									<tr>
									
										<td>电器工程及自动化</td>
										<td>520</td>
										<td>512</td>
										<td>518</td>
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
										<td>
											<div class="collegeInfo">
												<p class="collegeName">浙江农林大学</p>
												<p>历史投档线：</p>
												<p>2013年：518</p>
												<p>2014年：536</p>
												<p>2015年：526</p>
											</div>
										</td>
										<td>土木工程</td>
										<td>470</td>
										<td>463</td>
										<td>479</td>
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
	<script src="/static/web/js/vendors.d10a4c81.js"></script></body>
</html>