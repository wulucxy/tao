<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<section class="contentInner collection">
<div class="topWell">
	<em class="square vm"></em><span class="vm">我的收藏</span>
</div>
<div class="content">

	<div class="wellWrapper tabs" id="collectionWrapper">
		<nav class="clearfix">                
                 <ul>
					<li  class="tab-item current"><a href="javascript:;">院校</a></li>
					<li  class="tab-item"><a href="javascript:;">专业</a></li>
					<li  class="tab-item"><a href="javascript:;">资讯</a></li>
				</ul>
        </nav>
		
		<div class="content-wrap">
			<section class="tab-box schoolWrap current">
				
				<div class="schoolListWrap">
					<ul class="schoolList">
						
						<c:choose>
						<c:when test="${colleges == []}">
					   		<li class="no_transList"><i class="noListIcon"></i><em class="vm g9">暂无记录</em></li>
						</c:when>
						<c:otherwise>
						<c:forEach var="list" items="${colleges}">
						   <li class="clearfix">
								<div class="fl">
								<h4 class="name badgeRow"><em class="badgetitle vm">${list.collegeName}</em>
									<c:forEach var="feature" items="${list.feature}">
									<c:choose>
										<c:when test="${feature.type == 1}">
											<span class="badge green">${feature.name}</span>
										</c:when>
										<c:when test="${feature.type == 2}">
											<span class="badge red">${feature.name}</span>
										</c:when>
										<c:otherwise>
											<span class="badge">${feature.name}</span>
										</c:otherwise>
									</c:choose>
									</c:forEach>
								</h4>
								<div class="detail">
									<span class="label">院校属地：</span><span class="field">${list.city.name}</span>
									<span class="label">院校分类：</span><span class="field">${list.collegeType.name}</span>
									<span class="label">院校性质：</span><span class="field">${list.ownerType.name}</span>
									<span class="label">院校层次：</span><span class="field">${list.level.name}</span>
								</div>
								</div>
								<div class="fr">
									<a href="#" class="btn btn-primary btn-mid">查看详情</a>
								</div>
							</li>
						</c:forEach>
						</c:otherwise>
						</c:choose>
					</ul>
					
				</div>

			</section>
			<section class="tab-box majorWrap">
				
				<div class="majorListWrap">
					<ul class="majorList">
						
						<li>
							<div class="bs bg-gf">哲学：4个</div>
							<div class="btnsRow">
								<span class="btn btn-primary">哲学</span>
								<span class="btn btn-primary">逻辑学</span>
								<span class="btn btn-primary">宗教</span>
								<span class="btn btn-primary">xxx</span>
							</div>
						</li>

					</ul>

				</div>

			</section>
			<section class="tab-box infoWrap">
				<div class="infoListWrap">
					<ul class="infoList load-more-list">
						
						<li>
							<div class="media">
								<span class="fl imgWrap">
									<img src="http://placehold.it/130X130" class="responsive">
								</span>
								<div class="media-body">
										<div class="detailTitle">
											参加2017年新高考的考生们，从现在起，规划你的升学方向吧！
										</div>
										<div class="clearfix detailSub g6">
											<span class="fl article-tag">2017高考</span>
											<span class="fr moment">1小时前</span>
										</div>
										<a class="db detailCnt" target="_blank">
											根据考生输入志愿一项，按照志愿填报专家团队设计多公式运算后进行精准匹配，对考生志愿的学校和专业分别给予风险等级评估，以帮助考生规避志愿填报风险。
										</a>
								</div>
							</div>
						</li>

						<li>
							<div class="media">
								<span class="fl imgWrap">
									<img src="http://placehold.it/130X130" class="responsive">
								</span>
								<div class="media-body">
										<div class="detailTitle">
											参加2017年新高考的考生们，从现在起，规划你的升学方向吧！
										</div>
										<div class="clearfix detailSub g6">
											<span class="fl article-tag">2017高考</span>
											<span class="fr moment">1小时前</span>
										</div>
										<a class="db detailCnt" target="_blank">
											根据考生输入志愿一项，按照志愿填报专家团队设计多公式运算后进行精准匹配，对考生志愿的学校和专业分别给予风险等级评估，以帮助考生规避志愿填报风险。
										</a>
								</div>
							</div>
						</li>
					</ul>
					
					

				</div>
			</section>
		</div>
	</div>
</div>
</section>