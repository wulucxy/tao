/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require("jquery");

//工具类方法
var util = require("../../assets/components/util");

//公共方法
var common = require("../../assets/components/common");


//自定义功能写下面

//引入React
var React = require('react');
var ReactDOM = require('react-dom');

//自定义滚动插件
var scroll = require("../../assets/components/scroll");

var cityList = require("./lib/city");
//城市选择插件
var citySelect = require("./lib/citySelect");


var ListItem = React.createClass({
	
	provClick : function(e){
		var that = this;
		var $li = $(e.target),li = e.target;
		if($li.hasClass("current")) return;

		$li.siblings().removeClass("current");
		$li.addClass("current");

		

		that.ajaxRequest();
	},

	ajaxRequest : function(){
		var that = this;


	},

	componentDidMount:function() {

		

  	},

	render: function() {
	    return (
	     <li ref="myInput" value={this.props.item.value} onClick = {this.provClick} >{this.props.item.p}</li>
	    );
	}
});

var listCheckboxItem = React.createClass({
	render : function(){
		return (
			<li><label><input type="checkbox" name="city" n={this.props.item.n} value={this.props.item.value} /><em>{this.props.item.n}</em></label></li>
		);
	}
});


var ProvinceItems = React.createClass({
	componentDidMount : function(){
		scroll($(".prov"),{
			height : $(".selectWrap").height(),
			start : 'top',
			alwaysVisible : true
		});

		// 选择省份时发生事件
		var prov = $(".prov"),provIndex;
		// $(".prov").on("click","li",function(){
		// 	if(prov.hasClass("disabled")) return;
		// 	provIndex = prov.find("li").index($(this));
		// 	$(this).siblings().removeClass("current");
		// 	$(this).addClass("current");

		// 	console.log($(this).attr("value"));

		// 	// $.ajax({
		// 	// 	url : "/getCity",
		// 	// 	type : "post",
		// 	// 	data : {provinceId:val},
		// 	// 	success : function(res){
		// 	// 		if(typeof res =="string"){
		// 	// 			var res = $.parseJSON(res);
		// 	// 		}

		// 	// 		that.cityStart.call(that,res);
		// 	// 		if(callback){
		// 	// 			callback();
		// 	// 		}
		// 	//  	},
		// 	// 	error : function(err){
		// 	// 		console.log(err);
		// 	// 	}
		// 	// })

		// });


		

	},

	render: function() {

	    var listItems = this.props.items.map(function(item){
	      return <ListItem key={item.v} item={item} />;
	    });

	    return (
	     <div className="column col1 fl">
			<h4>请选择省份</h4>
			<div className="selectWrap">
				<ul className="prov">
	     			{listItems}
	     		</ul>
	     	</div>
		</div>
	    );
	}
});


var CityItems = React.createClass({

	componentDidMount : function(){


	},

	render: function() {

	    var listCheckboxItems = this.props.items.map(function(item){
	      return <listCheckboxItem key={item.value} item={item} />;
	    });

	    return (
	     <div className="column col2 fl">
			<h4>请选择城市</h4>
			<div className="selectWrap">
				<ul className="city">
	     			{listCheckboxItems}
	     		</ul>
	     	</div>
		</div>
	    );
	}
});


var Home = React.createClass({
  getInitialState: function(){
    return {
      province : cityList,
      items: []
    }
  },

  // componentDidMount: function() {
  //   $.get(this.props.url, function(result) {
  //     var words = result.words;
  //     if (this.isMounted()) {
  //       this.setState({
  //         items: words
  //       });
  //     }
  //   }.bind(this));
  // },

  render: function() {
    return (
      <div>
      	<ProvinceItems items={this.state.province} />
      	<CityItems items={this.state.items} />
      </div>
    );
  }
});

ReactDOM.render(<Home />, document.getElementById('citySelectContainer'));