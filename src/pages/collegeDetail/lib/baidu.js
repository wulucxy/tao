var extend =  require('object-assign');

var baidu = {

	init : function(wrapper,options){
		var options = extend({
			location : {
				lat : "39.915",
				lng : "116.404"
			}
		},options);

		this.wrapper = wrapper;
		this.options = options;
		this.renderMap();
	},

	renderMap : function(){
		var that = this,o = that.options;
		var map = new BMap.Map(this.wrapper);          // 创建地图实例  
		var point = new BMap.Point(o.location.lng, o.location.lat);  // 创建点坐标 
		map.centerAndZoom(point, 15); 
		var marker = new BMap.Marker(point);        // 创建标注    
		map.addOverlay(marker);                     // 将标注添加到地图中
	}

};

module.exports = baidu;