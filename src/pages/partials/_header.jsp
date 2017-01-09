<%@include file="/WEB-INF/views/include/taglib.jsp"%><%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page contentType="text/html; charset=UTF-8" %>

<!--[if lte IE 9]>
	<script src="//cdn.bootcss.com/selectivizr/1.0.2/selectivizr-min.js"></script>
    <script src="//cdn.bootcss.com/html5shiv/r29/html5.min.js"></script>
    <script src="//cdn.bootcss.com/es5-shim/4.5.0/es5-shim.min.js"></script>
    <script src="//cdn.bootcss.com/es5-shim/4.5.0/es5-sham.js"></script>
    <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->

<script src="//libs.baidu.com/jquery/1.11.1/jquery.min.js"></script>

	<header class="header">
	  <div class="topBar">
		<div class="container clearfix">
			<div class="fl logo">
				<a class="imgWrap dib" target="_blank" href="/">
					<img src="./img/logo.png" alt="logo" class="responsive">
				</a>
				<span class="province f18">${user.province.name}</span>
			</div>

			<div class="fr clearfix g-login">
				<!-- <div class="thirdLogin fl f14">
					<a href="#" class="weixin link">
						<span class="thirdIcon wxIcon">&nbps;</span><span class="vm">微信登录</span>
					</a>
					<a href="#" class="qq link">
						<span class="thirdIcon qqIcon">&nbps;</span><span class="vm">QQ登录</span>
					</a>
					<a href="#" class="weibo link">
						<span class="thirdIcon wbIcon">&nbps;</span><span class="vm">微博登录</span>
					</a>
				</div> -->
				<div class="m-login fr">
					<c:choose>
				    <c:when test="${user.isLogin == 1}">
				   		<div class="hd-user">
				   			<a href="/user" class="dib user-l link">
							<span class="imgWrap minAvatar vm">
								<img src="${user.userAvatar}" class="responsive">
							</span>
							<em class="vm">个人中心</em>
							</a>
							<a href="javascript:;" class="dib user-r link" id="signout">
							<span class="imgWrap exit">
								<img src="./img/exit.png" class="responsive">
							</span>
							<em class="vm">注销</em>
							</a>
						</div>
					</c:when>
					<c:otherwise>
						<div class="hd-login">
							<a href="javascript:;" class="loginBtn link" id="login">登录</a>
							/
							<a href="javascript:;" class="regBtn link" id="reg">注册</a>
						</div>
					</c:otherwise>
				   </c:choose>
				</div>
			</div>
		 </div>
		</div>
		
		<nav>
		   <div class="container clearfix">
				<ul class="clearfix navLists fl">
					<li class="navList current no-dropdown"><a href="/">首页</a></li>
					<li class="navList" data-toggle="dropdown">
						<a href="javascript:;" class="trigger">工具箱</a>
						<div class="listWrap">
							<div class="options">
								<a class="ddlist" href="/box/plan/book_step1">高考志愿定制</a>
								<a class="ddlist" href="/box/plan/evaluate_step1">高考志愿评估</a>
								<a class="ddlist" href="/box/plan/major_exam1">专业选择测试</a>
								<a class="ddlist" href="/box/plan/aboard">留学方案定制</a>
								<a class="ddlist" href="/appointment/create">专家预约</a>
								<a class="ddlist" href="/box/score_management">成绩管理</a>
								<a class="ddlist" href="/box/college_faq">专家问答</a>
								
							</div>
						</div>
					</li>
					<li class="navList" data-toggle="dropdown">
						<a href="javascript:;" class="trigger">数据库</a>
						<div class="listWrap">
							<div class="options">
								<a class="ddlist" href="/library/college">院校数据库</a>
								<a class="ddlist" href="/library/major">专业数据库</a>
								<a class="ddlist" href="/library/subject">科目数据库</a>
								
								<a class="ddlist" href="/library/aboard_data">海外院校库</a>
								<a class="ddlist" href="/scoreTransformer">分数转换</a>
							</div>
						</div>
					</li>
					<li class="navList no-dropdown">
						<a href="/infoV2">资讯</a>
					</li>
					<li class="navList" data-toggle="dropdown" >
						<a href="javascript:;" class="trigger">下载APP</a>
						<div class="listWrap">
							<ul class="options down-app-options">
							<li class="floatTipWrap down-app-wrapper">
								<div class="tipContent">
									<img src="./img/equode.png" class="responsive">
								</div>
								<span class="mc mcTt"></span>
								<span class="mc mcTt mcInner"></span>
							</li>
							</ul>
						</div>
					</li>
					<li class="navList" data-toggle="dropdown">
						<a href="javascript:;" class="trigger">公众号</a>
						<div class="listWrap">
							<ul class="options down-app-options gzh-app-options">
							<li class="floatTipWrap down-app-wrapper">
								<div class="tipContent">
									<img src="./img/equode2.png" class="responsive">
								</div>
								<span class="mc mcTt"></span>
								<span class="mc mcTt mcInner"></span>
							</li>
							</ul>
						</div>
					</li>
				</ul>

				<div class="s-search fr">
					<div class="clearfix">
						<form action="/search" target="_blank" id="searchForm" onsubmit="return false;">
						<div class="btn-group fl" id="selectSwitch">
						    <a class="btn btn-default btn-select trigger" href="javascript:;">
						    	<em class="selectField"></em> 
						      	<span class="caret"></span>
					      	</a>
					      	<input type="hidden" name="type">
						    <ul class="options">
						        <li data-field="1">院校</li>
						        <li data-field="2">专业</li>
						    </ul>
					    </div>
						<div class="input-group fl clearfix">
				          <input type="text" class="form-control fl" placeholder="请输入关键字搜索" id="searchField" name="keyword">
				          <span class="input-group-btn">
				            <button class="btn btn-default btn-search" type="button" id="searchBtn">
				            	<i class="iconList icon-search"></i>
				            </button>
				          </span>
				        </div>
				    </form>
				    </div>
				</div>

			</div>

		</nav>

	</header>