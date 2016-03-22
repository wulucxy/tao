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
			el : ".addSchool",
			provinceId : 330000
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
	    var o = that.options;
	    $.ajax({
	      url : preServer+o.provinceId+"/data/college/search",
      	  type : "post",
	      contentType: "application/json",
	      data : JSON.stringify({page:pager,"keyword":$.trim($("#wd").val())}),
	      success : function(res){
	        if(typeof res == "string"){
	          var res = $.parseJSON(res);
	        }

	        if(res.code!=1){
				warn(res.msg);
				return;
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
	    });
	}

};

module.exports = searchSchool;