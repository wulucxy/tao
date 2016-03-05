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
					<img src="/static/web/img/logo.png" alt="logo" class="responsive">
				</a>
				<span class="province f18">浙江</span>
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
				    <c:when test="${user.isLogin=='1'}">
				   		<div class="hd-user">
				   			<a href="/user" class="dib user-l link">
							<span class="imgWrap minlogo vm">
								<img src="/static/web/img/minlogo.png" class="responsive">
							</span>
							<em class="vm">个人中心</em>
							</a>
							<a href="/signout" class="dib user-r link">
							<span class="imgWrap exit">
								<img src="/static/web/img/exit.png" class="responsive">
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
					<li class="navList current"><a href="/">首页</a></li>
					<li class="navList" data-toggle="dropdown">
						<a href="javascript:;" class="trigger">工具箱</a>
						<div class="listWrap">
							<ul class="options">
								<li class="ddlist"><a href="/box/plan/book_step1">高考方案定制</a></li>
								<li class="ddlist"><a href="/box/plan/evaluate_step1">高考志愿评估</a></li>
								<li class="ddlist"><a href="/box/score_management">成绩管理</a></li>
								<li class="ddlist"><a href="/box/plan/major_exam1">专业测试</a></li>
								<li class="ddlist"><a href="/box/plan/aboard">留学方案定制</a></li>
							</ul>
						</div>
					</li>
					<li class="navList" data-toggle="dropdown">
						<a href="javascript:;" class="trigger">资料库</a>
						<div class="listWrap">
							<ul class="options">
								<li class="ddlist"><a href="/library/college">院校数据库</a></li>
								<li class="ddlist"><a href="/library/major">专业数据库</a></li>
								<li class="ddlist"><a href="/library/subject">科目数据库</a></li>
								<li class="ddlist"><a href="/library/score_line">分数线数据库</a></li>
								<li class="ddlist"><a href="#">海外院校库</a></li>
							</ul>
						</div>
					</li>
					<li class="navList">
						<a href="/info">资讯</a>
					</li>
					<li class="navList" data-toggle="dropdown" >
						<a href="javascript:;" class="trigger">下载APP</a>
						<div class="listWrap">
							<ul class="options down-app-options">
							<li class="floatTipWrap down-app-wrapper">
								<div class="tipContent">
									<img src="/static/web/img/equode.png" class="responsive">
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
							<ul class="options down-app-options">
							<li class="floatTipWrap down-app-wrapper">
								<div class="tipContent">
									<img src="/static/web/img/equode2.png" class="responsive">
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
						<div class="btn-group fl" id="selectSwitch">
						    <a class="btn btn-default btn-select trigger" href="javascript:;">
						    	<em class="selectField"></em> 
						      	<span class="caret"></span>
					      	</a>
					      	<input type="hidden" name="searchField">
						    <ul class="options">
						        <li data-field="1">院校</li>
						        <li data-field="2">专业</li>
						    </ul>
					    </div>
						<div class="input-group fl clearfix">
				          <input type="text" class="form-control fl" placeholder="请输入关键字搜索">
				          <span class="input-group-btn">
				            <button class="btn btn-default btn-search" type="button">
				            	<i class="iconList icon-search"></i>
				            </button>
				          </span>
				        </div>
				    </div>
				</div>

			</div>

		</nav>

	</header>