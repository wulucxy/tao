var $ = window.$ || require("jquery");
var extend =  require('object-assign');

require("./index.less");
//自定义功能写下面
var tmpl_school = require("./templates/searchSchool.ejs");
var tmpl_list = require("./templates/schoolList.ejs");

//分页
var pagination = require("../pagination");

var searchSchool = {

	init : function(options){
		this.pager = 1;
		this.options = extend({
			el : ".addSchool" 
		},options);

		this.bindEvt();
	},

	bindEvt : function(){
		var that = this,o = that.options;
		
		$(o.el).on("focusin",function(e){
	      e.preventDefault();
	      var oInput = $(e.target);
	      if(oInput.hasClass("cur")) return;
	      oInput.addClass("cur");

	      that.trigger = oInput;

	      modalBox(oInput,{
	        html : tmpl_school(),
	        klass : 'w540 shadow',
	        closeByOverlay : false,
	        startCallback : function(modal){
	          //指向
	          that.modal = modal;
	          that.modal.ref = this;

	          modal.majorType = oInput.attr("major");
	          that.requestData(that.pager);
	          
	        },
	        completeCallback : function(){
	          var self = oInput; 
	          var oInput = $("#wd");
	          $("#sBtn").on("click",function(e){
	            e.preventDefault();
	            if($.trim(oInput.val()) == ""){
	              warn("请输入搜索关键词");
	              return false;
	            }

	            that.requestData(that.pager);
	          });
	          
	        },
	        closeCallback : function(){
	          oInput.removeClass("cur");
	        }
	      });

	    });
	},
	requestData : function(pager){
	    var that = this;
	    $.ajax({
	      url : "/v2/client/getCollegeList",
	      type : "post",
	      contentType: "application/json",
	      data : JSON.stringify({page:pager,"wd":$.trim($("#wd").val())}),
	      success : function(res){
	        if(typeof res == "string"){
	          var res = $.parseJSON(res);
	        }

	        that.renderList(res);
	        that.detailpagination(res);
	        that.Evt();
	      }
	    });
	},

    renderList : function(res){
      var that = this;
      var modal = that.modal;

      $('.schoolLists').empty().append(tmpl_list(res)).hide().fadeIn();
    },

   detailpagination : function(res){
     var that = this;
     var modal = that.modal;
     if(!modal.find('.pagination').length){
       modal.find('.s-Content').append('<div class="pagination"></div>');
          var $page = modal.find(".pagination");
          pagination($page,{
            pages: res.count,
            displayedPages: 3,
            currentPage : 1,
            edges: 1,
            onPageClick : function(pageNo){
              that.requestData(pageNo);
            }
          });
      }    
    },

	Evt : function(){
	    var that = this,o = that.options;
	    $(document).off().on("click",".schoolList",function(e){
	      e.preventDefault();
	      var $this = $(this);
	      $this.siblings().removeClass("active");
	      $this.addClass("active");

	  	  o.selectListCallback && o.selectListCallback.call(that,$this);

	      $(".btn-close").trigger("click");
	    });
	}

};

module.exports = searchSchool;