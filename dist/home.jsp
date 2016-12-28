
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
<link href="/static/web/css/vendors.95838b90.css" rel="stylesheet"><link href="/static/web/css/home.b7070d10.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
		
	<section class="s-banner rel">
		<div class="bannerShow bannerLoading" id="bannerShow">
			 <ul id="bannerList" class="bannerList clearfix">
				
				<c:forEach var="banner" items="${bannerList}">
				   <li class="picSlide" data-pic = "${banner.imgUrl}" >
				   <c:choose>
				    <c:when test="${banner.href != null}">
				   		<a href="${banner.href}" target="_blank" >&nbsp;</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;" >&nbsp;</a>
					</c:otherwise>
				   </c:choose>
				   </li>
				</c:forEach>
			 </ul>
		</div>

		<div class="enterWrap abs">
			<a href="/box/plan/book_step1" class="enterLinks book" target="_blank">高考志愿定制</a>
			<a href="/box/score_management" class="enterLinks score" target="_blank">成绩管理</a>
			<a href="/box/plan/evaluate_step1" class="enterLinks evaluate" target="_blank">高考志愿评估</a>
			<a href="/box/plan/aboard" class="enterLinks aboard" target="_blank">留学方案定制</a>
			<a href="/box/plan/major_exam1" class="enterLinks test" target="_blank">专业选择测试</a>
			<a href="/box/college_faq" class="enterLinks qa" target="_blank">高校问答</a>
			<a href="/appointment/create" class="enterLinks expert" target="_blank">志愿填报专家预约</a>
		</div>

	</section>
	
	<section class="s-slogan">
		<ul class="clearfix container">
			<li class="sloganList">
			 <div class="pad">
					<p class="tc"><a href="jvascript:;" class="sloganTag slogan_1" id="caseBox"></a></p>
					<h4>超好用&nbsp;个性化</h4>
					<ul>
						<li class="subSloganList">权威引进国家教育部考试中心</li>
						<li class="subSloganList">严谨科学的高考志愿私人定制</li>
						<li class="subSloganList">运用大数据科学评估与建议</li>
					</ul>
				</div>
			</li>
			<li class="sloganList">
				<div class="pad">
					<p class="tc"><a href="jvascript:;" class="sloganTag slogan_2" id="library"></a></p>
					<h4>超方便&nbsp;最好用</h4>
					<ul>
						<li class="subSloganList">选考科目、专业设置、录取分数线、高校排名、专业排名……</li>
						<li class="subSloganList">严谨科学的高考志愿私人定制</li>
						<li class="subSloganList">运用大数据科学评估与建议</li>
					</ul>
				</div>
			</li>
			<li class="sloganList">
				<div class="pad">
					<p class="tc"><a href="jvascript:;" class="sloganTag slogan_3" id="recommend"></a></p>
					<h4>“三端一体”高考志愿综合服务</h4>
					<ul>
						<li class="subSloganList">网站、APP和微信公众号“三端一体”</li>
						<li class="subSloganList">集结国内众多高考志愿填报专家科学研发</li>
						<li class="subSloganList">国内领先的新媒体高考志愿综合服务平台</li>
					</ul>
				</div>
			</li>
		</ul>
	</section>

	<section class="s-carousel">
		<div class="collegeWrap container ovh">
		<ul class="collegeList clearfix">
			<c:forEach var="list" items="${collegeList}">
				<li class="college">
					<c:choose>
				    <c:when test="${list.href != null}">
				   		<a href="${list.href}" target="_blank">
							<img src="${list.imgUrl}" class="responsive">
						</a>
					</c:when>
					<c:otherwise>
						<a href="javascript:;">
							<img src="${list.imgUrl}" class="responsive">
						</a>
					</c:otherwise>
				   </c:choose>
				</li>
			</c:forEach>
		</ul>
		</div>
	</section>
	
	<section class="ovh s-recommend">
	  <div class="container ovh">
		<div class="f-layout clearfix">
			<div class="column c-68 fl">
				<div class="colPad">

					<div class="content recommend">
						<h3 class="clearfix title" rel="recommend">
							<span class="fl s-title">
								推荐阅读
								<em class="underLine"></em>	
							</span>
							<a href="/info" class="link fr more" target="_blank">更多>></a>
						</h3>

						<ul class="listView recommendList clearfix">
							<c:forEach var="list" items="${recommendList}">
							   <li>
									<div class="media">
										<span class="fl imgWrap">
											<img src="${list.imgUrl}" class="responsive">
										</span>
										<div class="media-body">
										  	<a href="${list.href}" class="db" target="_blank">
												<div class="g3 txt ellipsis" title="${list.fullTitle}">
													${list.title}
												</div>
												<div class="clearfix detail">

				<c:choose>
				    <c:when test="${list.source != null}">
				   		<span class="fl source g9 btn btn-primary btn-outlined">${list.source}</span>
					</c:when>
				</c:choose>
													
													<span class="fr moment g9">${list.moment}</span>
												</div>
											</a>
										</div>
									</div>
								</li>
							</c:forEach>
						</ul>
					</div>

				</div>
			</div>
			<div class="column c-32 fl">
				<div class="colPad">
					
					<div class="countdown g3">
						<span class="imgWrap vm"><img src="/static/web/img/time.png" ></span>
						<span class="vm f14">${countdown}</span>
					</div>

					<div class="directs">
						<ul>
							<c:forEach var="list" items="${adList}">
							<li>
							<c:choose>
							    <c:when test="${list.href != null}">
							   		<a href="${list.href}" target="_blank" >
							   			<img src="${list.imgUrl}" >
							   		</a>
								</c:when>
								<c:otherwise>
									<a href="javascript:;" >
										<img src="${list.imgUrl}" >
									</a>
								</c:otherwise>
							</c:choose>
							</li>
							</c:forEach>
						</ul>
					</div>

				</div>
			</div>

		</div>
	  </div>
	</section>

	<section class="ovh s-archive">
	  <div class="container ovh">
		<div class="f-layout clearfix">
			<div class="column">
				<div class="colPad">
					<div class="content">
						<h3 class="clearfix title" rel="library">
							<span class="fl s-title">
								数据库
								<em class="underLine"></em>	
							</span>
						</h3>
						
						<ul class="archiveList clearfix">
							<li>
								<div class="pad">
									<a class="grid db" target="_blank" href="/library/college">
										<div class="top">
											<i class="icon-archive"></i>
											<em class="mc mcBt"></em>
										</div>
										<div class="bot">
											<h4>院校数据库</h4>
											<div class="db-content">
												院校数据库能够给你提供全新的院校检索功能，获得你想要的院校相关所有数据。
											</div>
										</div>
									</a>
								</div>
							</li>
							<li>
								<div class="pad">
									<a class="grid db" target="_blank" href="/library/major">
										<div class="top">
											<i class="icon-archive"></i>
											<em class="mc mcBt"></em>
										</div>
										<div class="bot">
											<h4>专业数据库</h4>
											<div class="db-content">
												专业数据库的价值在于你能够通过自己喜好的专业来迅速地寻找对应地高校。
											</div>
										</div>
									</a>
								</div>
							</li>
							<li>
								<div class="pad">
									<a class="grid db" target="_blank" href="/library/subject">
										<div class="top">
											<i class="icon-archive"></i>
											<em class="mc mcBt"></em>
										</div>
										<div class="bot">
											<h4>科目数据库</h4>
											<div class="db-content">
												科目数据库与全国范围内的高校、专业相关联，新高考科类选择与专业报考的关联轻松获得。
											</div>
										</div>
									</a>
								</div>
							</li>
							<li>
								<div class="pad">
									<a class="grid db" target="_blank" href="/library/score_line">
										<div class="top">
											<i class="icon-archive"></i>
											<em class="mc mcBt"></em>
										</div>
										<div class="bot">
											<h4>分数线数据库</h4>
											<div class="db-content">分数线数据库通过可视化查询,直观地查看近3年高校投档线和专业录取分数线的变化趋势。
											</div>
										</div>
									</a>
								</div>
							</li>
							<li>
								<div class="pad">
									<a class="grid db" target="_blank" href="/library/aboard_data">
										<div class="top">
											<i class="icon-archive"></i>
											<em class="mc mcBt"></em>
										</div>
										<div class="bot">
											<h4>海外院校库</h4>
											<div class="db-content">
												海外院校库打造涵盖全球范围内上万所热门院校的报考权威数据库。
											</div>
										</div>
									</a>
								</div>
							</li>
						</ul>

					</div>
					

				</div>
			</div>
			

		</div>
	  </div>
	</section>

	<section class="ovh s-tool">
	  <div class="container ovh">
		<div class="f-layout clearfix">
			<div class="column c-68 fl">
				<div class="colPad">

					<div class="content">
						<h3 class="clearfix title" rel="caseBox">
							<span class="fl s-title">
								工具箱
								<em class="underLine"></em>	
							</span>
						</h3>

						<ul class="listView toolLists clearfix">
							<li class="media">
								<span class="fl imgWrap">
									<i class="icon-tools"></i>
								</span>
								<div class="media-body">
									<h5 class="">高考志愿定制</h5>
									<div class="txt">通过考生输入的信息和报考意向，按照专家团队根据志愿填报规则设计的公式，科学运用大数据，进行运算、匹配，提供完整的志愿填报个性化参考方案。</div>
									
									<div class="detail clearfix">
										<span class="fl">已成功帮助&nbsp;<em class="red">${number1}</em>&nbsp;名学生</span>
										<a href="/box/plan/book_step1" target="_blank" class="btn btn-primary btn-medium fr">立即使用</a>
									</div>
								</div>
							</li>

							<li class="media">
								<span class="fl imgWrap">
									<i class="icon-tools"></i>
								</span>
								<div class="media-body">
									<h5>高考志愿评估</h5>
									<div class="txt">根据考生预备填报的高校与专业志愿，按照专家团队根据志愿填报规则设计的公式，科学运用大数据，对志愿填报给出报考风险的科学评估。</div>
									
									<div class="detail clearfix">
										<span class="fl">已成功帮助&nbsp;<em class="red">${number2}</em>&nbsp;名学生</span>
										<a href="/box/plan/evaluate_step1" target="_blank" class="btn btn-primary btn-medium fr">立即使用</a>
									</div>
								</div>
							</li>

							<li class="media">
								<span class="fl imgWrap">
									<i class="icon-tools"></i>
								</span>
								<div class="media-body">
									<h5 class="neeRow">专业选择测试<span class="badge"><i class="icon-nee"></i>
									<em class="vm">教育部考试中心独家授权</em></span></h5>
									<div class="txt">由国家教育部考试中心定制，独家授权“淘志愿”，测试结果将生成科学的报告书，并向学生个性化推荐大学专业，供广大考生和家长在志愿填报时参考。</div>
									
									<div class="detail clearfix">
										<span class="fl">已成功帮助&nbsp;<em class="red">${number3}</em>&nbsp;名学生</span>
										<a href="/box/plan/major_exam1" target="_blank" class="btn btn-primary btn-medium fr">立即使用</a>
									</div>
								</div>
							</li>

							<li class="media">
								<span class="fl imgWrap">
									<i class="icon-tools"></i>
								</span>
								<div class="media-body">
									<h5>留学方案定制</h5>
									<div class="txt">输入留学的个人相关信息以及意向留学国家和留学层次，即可获得一份为你定制的留学院校和专业列表，最便捷地为你的出国留学提供参考方案。</div>
									
									<div class="detail clearfix">
										<span class="fl">已成功帮助&nbsp;<em class="red">${number4}</em>&nbsp;名学生</span>
										<a href="/box/plan/aboard" target="_blank" class="btn btn-primary btn-medium fr">立即使用</a>
									</div>
								</div>
							</li>
						</ul>
					</div>

				</div>
			</div>
			<div class="column c-32 fl">
				<div class="colPad">
					<div class="content">
						<h3 class="clearfix title">
							<span class="fl s-title">
								合作机构
								<em class="underLine"></em>	
							</span>
						</h3>
						
						<div class="coopLists">
							<a class="imgWrap coop tc" href="javascript:;">
								<img src="/static/web/img/nee.png" class="responsive">
							</a>

							<a class="imgWrap coop" target="_blank" href="//www.strong-study.com/">
								<img src="/static/web/img/sq.png" class="responsive">
							</a>
						</div>
						

						<div class="directs">
							<ul>
							<c:forEach var="list" items="${adList2}">
							<li>
							<c:choose>
							    <c:when test="${list.href != null}">
							   		<a href="${list.href}" target="_blank" >
							   			<img src="${list.imgUrl}" >
							   		</a>
								</c:when>
								<c:otherwise>
									<a href="javascript:;" >
										<img src="${list.imgUrl}" >
									</a>
								</c:otherwise>
							</c:choose>
							</li>
							</c:forEach>
						</ul>
						</div>
				  </div>
				</div>
			</div>

		</div>
	  </div>
	</section>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.f2eda443.js"></script><script src="/static/web/js/home.1940885c.js"></script></body>
</html>