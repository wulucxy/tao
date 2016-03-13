var $ = window.$ || require("jquery");
var extend =  require('object-assign');

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');


var chart = {
	init : function(target,options){
		// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(target);
		// 绘制图表
		myChart.setOption({
		    tooltip: {},
		    xAxis: {
		        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
		    },
		    yAxis: {},
		    series: [{
		        name: '销量',
		        type: 'line',
		        data: [5, 20, 36, 10, 10, 20]
		    }]
		});
	}

};

module.exports = chart;