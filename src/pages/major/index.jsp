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
		
		<!-- 保存province属性 -->
		<input type="hidden" name="province" value="${user.province.code}">

		<div class="container dbWrapper db">
			<div class="content">
				<h3 class="clearfix title">
					<span class="fl s-title">
						专业数据库
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
						
						<div class="m-nav clearfix">
							<div class="crumb clearfix">
								<a href="javascript:;" class="fr btn btn-default" data-action="clearAll">清空所有</a>
								<span class="cat-text fl">已选择：</span>
								<span class="tagsWrap">
								</span>
							</div>
							
							<div class="row first expand-mode">
								<div class="foot">
									<a href="javascript:;" class="btn btn-default show-less" data-action="toggle">
										<em class="vm">收起</em>
										<span class="taoIcon btn-arrow-up vm"></span>
									</a>
									<a href="javascript:;" class="btn btn-default show-more" data-action="toggle">
										<em class="vm">更多</em>
										<span class="taoIcon btn-arrow-down vm"></span>
									</a>
								</div>
								
								<div class="body media">
									<a class="fl item" href="javascript:;" data-action="add" data-value="bachelor:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:1">哲学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:2">经济学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:3">法学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:4">教育学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:5">文学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:6">历史</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:7">力学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:8">工学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:9">农学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:10">医学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:11">管理学</a>
										<a href="javascript:;" class="item" data-action="add" data-value="bachelor:0">不选本科</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									本科类别：
								</span>
							</div>

							<div class="row expand-mode">
								<div class="foot">
									<a href="javascript:;" class="btn btn-default show-less" data-action="toggle">
										<em class="vm">收起</em>
										<span class="taoIcon btn-arrow-up vm"></span>
									</a>
									<a href="javascript:;" class="btn btn-default show-more" data-action="toggle">
										<em class="vm">更多</em>
										<span class="taoIcon btn-arrow-down vm"></span>
									</a>
								</div>
								
								<div class="body media last">
									<a class="fl item" href="javascript:;" data-action="add" data-value="junior:">不限</a>
									<div class="media-body">
										<div class="itemLists">
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">农林牧渔大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">交通运输大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">生化与药品大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">土建大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">材料与能源大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">医药卫生大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">法律大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">艺术设计传媒大类</a>
										<a href="javascript:;" class="item" data-action="add" data-value="junior:1">电子信息大类</a>										
										<a href="javascript:;" class="item" data-action="add" data-value="junior:0">不选专科</a>
										</div>
									</div>
								</div>
								<span class="head g9">
									专科类别：
								</span>
							</div>

						</div>

						<div class="majorListWrap">
							<ul class="majorList">
								<li>
									<div class="bg bg-f1">
										哲学：4个
									</div>
									<div class="majorBtnRow">
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
									</div>
								</li>

								<li>
									<div class="bg bg-f1">
										哲学：4个
									</div>
									<div class="majorBtnRow">
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
										<a href="#" target="_blank" class="btn btn-primary">哲学</a>
									</div>
								</li>

							</ul>
						</div>

					</div>
					<div class="col2 col2 fr">
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
	</body>
</html>