/* 建议这里都引入 */
require('../../assets/less/common.less');
require('./index.less');
var $ = window.$ || require('jquery');

//工具类方法
var util = require('../../assets/components/util');

//公共方法
var common = require('../../assets/components/common');

/* 具体实现 */

var React = require('react');
var ReactDOM = require('react-dom');


// 表单验证组件
require('../../assets/components/validator');

// 弹窗组件
var modalBox = require("../../assets/components/modalBox");

//弹窗模板
var tmpl_detail = require("../../assets/templates/detail.ejs");
var tmpl_questions = require("../../assets/templates/questions.ejs");



var mountNode = document.getElementById('majorWrapper');
import 'antd/lib/index.css';

import { Select } from 'antd';
var Option = Select.Option;

var majorData = ['哲学', '法学','经济学','计算机'];
var subMajorData = {
  '哲学': ['哲学1', '哲学2', '哲学3'],
  '法学': ['法学1', '法学2', '法学3'],
  '经济学': ['经济学1', '经济学2', '经济学3'],
  '计算机': ['计算机1', '计算机2', '计算机3']
};


var App = React.createClass({
  getInitialState() {
    return {
      majors: subMajorData[majorData[0]],
      items : 0,
      selected : []
    };
  },
  handleMajorChange(value) {
    this.setState({
      majors: subMajorData[value],
    });
  },
  onSubMajorChange(value) {
   if(typeof this.state.selected == 'undefined' || value.length > this.state.selected.length){
      var items = this.state.items >= 5 ? 5 : (++this.state.items);
   }else{
    var items = (--this.state.items);
   }

   this.setState({
      selected: value,
      items : items
    });

  },

  deselectHandle : function(value){
    var items = (--this.state.items);
    this.setState({
      items : items,
      selected: value
    });

  },

  componentDidMount : function(){
    // ie兼容
    $("#majorWrapper .ant-select:nth-child(2)").find('.ant-select-selection__rendered').addClass("fixSelect");
  },

  render : function() {

    var that = this;

    var majorOptions = majorData.map(function(major) {
      return (<option key= {major} >{major}</option>)
    });

    var subMajorOptions = this.state.majors.map(function(major) {
      if(that.state.selected.length<5){
        return (<option key={major}>{major}</option>)
      }else{
        return (<option key={major} disabled>{major}</option>)
      }
      
    });

    return <div>
      <Select defaultValue={majorData[0]} style={{width: 90}} onChange={this.handleMajorChange}>
        {majorOptions}
      </Select>

      {(this.state.selected.length < 5)?
      <Select multiple value={this.state.selected} style={{width: 400}} onChange={this.onSubMajorChange} >
        {subMajorOptions}
      </Select>
      : <Select multiple value={this.state.selected} style={{width: 400}} onChange={this.onSubMajorChange}>
        {subMajorOptions}
      </Select>
    }

      <div>
       {(this.state.selected.length >= 5)?
       <span>最多支持选中5项</span>
       :null}
      </div>

    </div>;
  }
});
ReactDOM.render(<App />, mountNode);


//切换顶部nav高亮
common.switchNav(1);

//checkbox定制
$('.label_radio').click(function(){
  util.setupLabel();
});

util.setupLabel();

$("[data-trigger]").on("click",function(e){
    e.preventDefault();
    var btn = $(e.target).closest(".trigger");
    var tmpl = btn.data("trigger") == "detail" ? tmpl_detail : tmpl_questions;

    modalBox( btn.get(0), {
          html:tmpl(),
          klass : 'w540 shadow',
          closeByOverlay : false,
          completeCallback : function(){ 
            
          }
      });
});
