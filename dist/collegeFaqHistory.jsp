<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>淘志愿</title>
<link href="/static/web/css/vendors.6be66a7c.css" rel="stylesheet"><link href="/static/web/css/collegeFaqHistory.d0c34ce7.css" rel="stylesheet"></head>
<body>
	<!-- 公共头部 -->
	<%@ include file = "/partials/_header.jsp" %>
	
	<!-- 所有页面内容必须包裹在mainContainer里面 -->
	<div class="mainContainer">
	
		<div class="container faqWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						历史问答
						<em class="underLine"></em>	
					</span>
				</h3>

				<div class="formWrap clearfix">
					<div class="column col1 fl">
						
						<div class="s-search">
							<div class="input-group rel clearfix">
					          <input type="text" class="form-control fl" placeholder="请输入院校名称">
					          <span class="input-group-btn">
					            <button class="btn btn-default btn-search" type="button">
					            	<i class="iconList icon-search"></i>
					            </button>
					          </span>
					        </div>
				        </div>

						<section class="faqList history">
							<div class="list-group">
						  <a href="javascript:;" class="list-group-item clearfix">
						    <div class="fl">
						    	<p class="collegeName">浙江大学</p>
						    	<p class="f13">总共&nbsp;158&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
						 <a href="javascript:;" class="list-group-item clearfix">
						   <div class="fl">
						    	<p class="collegeName">浙江大学</p>
						    	<p class="f13">总共&nbsp;158&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
						  <a href="javascript:;" class="list-group-item clearfix">
						   <div class="fl">
						    	<p class="collegeName">浙江大学</p>
						    	<p class="f13">总共&nbsp;158&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
						  <a href="javascript:;" class="list-group-item clearfix">
						   <div class="fl">
						    	<p class="collegeName">浙江大学</p>
						    	<p class="f13">总共&nbsp;158&nbsp;条回答</p>
						    </div>
						    <i class="fr taoIcon icon-right"></i>
						  </a>
						</div>
						
						<!-- 加载更多模块 -->
						<%@ include file = "/partials/_loadMore.jsp" %>

						</section>

					</div>
					<div class="col2 fr">
						<div class="directs">
							<ul>
								<c:forEach var="list" items="${adList}">
								<li><a href="${list.href}" target="_blank">
									<img src="${list.imgUrl}" >
								</a></li>
								</c:forEach>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>

	<!-- 公共右侧悬浮导航模块，需要放到maincontainer类的最后 -->
	<%@ include file = "/partials/_sidebar.jsp" %>

	</div>
	<!-- 公共尾部 -->
	<%@ include file = "/partials/_footer.jsp" %>
	<script src="/static/web/js/vendors.js"></script><script src="/static/web/js/collegeFaqHistory.js"></script></body>
</html>