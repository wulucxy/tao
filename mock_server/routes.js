module.exports = {
	// 页面路由
	'/': 'home.jsp',
	'/assess1': 'assess_step_1.jsp',
	'/assess2': 'assess_step_2.jsp',
	'/assess3': 'assess_step_3.jsp',
	'/pro1'   : 'pro_test_1.jsp',
	'/pro2'   : 'pro_test_2.jsp',
	'/pro3'   : 'pro_test_3.jsp',
	'/user'   : 'user.jsp',
	'/case2'   : 'case_2.jsp',
	'/case1'   : 'assess_step_1.jsp',
	'/case3'   : 'case_3.jsp',
	'/college'   : 'college.jsp',
	'/college2'   : 'college_2.jsp',
	'/404'   : 'error.jsp',


	//异步加载
	'post::/loadmore/history' : 'mock::api/history.json',
	'post::/loadmore/question' : 'mock::api/question.json',
	'post::/getCity' : 'mock::api/city.json',
	'post::/1/data/college' : 'mock::api/college.json',
	'post::/1/data/college/1/majors' : 'mock::api/major.json',
	'post::/1/profile/favor/college/add' : 'mock::api/addFav.json',
	'post::/1/profile/favor/college/delete' : 'mock::api/delFav.json'
};