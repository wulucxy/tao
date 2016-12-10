webpackJsonp([36],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* 建议这里都引入 */
	__webpack_require__(17);
	__webpack_require__(271);
	var $ = window.$ || __webpack_require__(39);
	
	//工具类方法
	var util = __webpack_require__(40);
	
	//公共方法
	var common = __webpack_require__(41);
	
	
	//自定义功能写下面
	var printThis = __webpack_require__(274);
	
	$('#printer').on('click',function(e){
		e.preventDefault();
		printThis($('#printContent'));
	})

/***/ },

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(272);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 272:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(19)();
	// imports
	
	
	// module
	exports.push([module.id, ".printer {\n  display: inline-block;\n  width: 68px;\n  height: 68px;\n  background: url(" + __webpack_require__(273) + ") no-repeat;\n  position: absolute;\n  right: -80px;\n  top: 16px;\n}\n", ""]);
	
	// exports


/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/web/img/print.png"

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	var $ = window.$ || __webpack_require__(39);
	var extend =  __webpack_require__(44);
	
	$.fn.outer = function() {
	    return $($("<div></div>").html(this.clone())).html()
	}
	
	function printThis(target,options){
	
	    function Plugin(t,o){
	      var $element = t;
	      var opt = o;
	
	       var strFrameName = "printThis-" + (new Date()).getTime();
	
	        if (window.location.hostname !== document.domain && navigator.userAgent.match(/msie/i)) {
	            // Ugly IE hacks due to IE not inheriting document.domain from parent
	            // checks if document.domain is set by comparing the host name against document.domain
	            var iframeSrc = "javascript:document.write(\"<head><script>document.domain=\\\"" + document.domain + "\\\";</script></head><body></body>\")";
	            var printI = document.createElement('iframe');
	            printI.name = "printIframe";
	            printI.id = strFrameName;
	            printI.className = "MSIE";
	            document.body.appendChild(printI);
	            printI.src = iframeSrc;
	
	        } else {
	            // other browsers inherit document.domain, and IE works if document.domain is not explicitly set
	            var $frame = $("<iframe id='" + strFrameName + "' name='printIframe' />");
	            $frame.appendTo("body");
	        }
	
	
	        var $iframe = $("#" + strFrameName);
	
	        // show frame if in debug mode
	        if (!opt.debug) $iframe.css({
	            position: "absolute",
	            width: "0px",
	            height: "0px",
	            left: "-600px",
	            top: "-600px"
	        });
	
	
	        // $iframe.ready() and $iframe.load were inconsistent between browsers    
	        setTimeout(function() {
	
	            // Add doctype to fix the style difference between printing and render
	            function setDocType($iframe,doctype){
	                var win, doc;
	                win = $iframe.get(0);
	                win = win.contentWindow || win.contentDocument || win;
	                doc = win.document || win.contentDocument || win;
	                doc.open();
	                doc.write(doctype);
	                doc.close();
	            }
	            if(opt.doctypeString){
	                setDocType($iframe,opt.doctypeString);
	            }
	
	            var $doc = $iframe.contents(),
	                $head = $doc.find("head"),
	                $body = $doc.find("body");
	
	            // add base tag to ensure elements use the parent domain
	            $head.append('<base href="' + document.location.protocol + '//' + document.location.host + '">');
	
	            // import page stylesheets
	            if (opt.importCSS) $("link[rel=stylesheet]").each(function() {
	                var href = $(this).attr("href");
	                if (href) {
	                    var media = $(this).attr("media") || "all";
	                    $head.append("<link type='text/css' rel='stylesheet' href='" + href + "' media='" + media + "'>")
	                }
	            });
	            
	            // import style tags
	            if (opt.importStyle) $("style").each(function() {
	                $(this).clone().appendTo($head);
	                //$head.append($(this));
	            });
	
	            //add title of the page
	            if (opt.pageTitle) $head.append("<title>" + opt.pageTitle + "</title>");
	
	            // import additional stylesheet(s)
	            if (opt.loadCSS) {
	               if( $.isArray(opt.loadCSS)) {
	                    jQuery.each(opt.loadCSS, function(index, value) {
	                       $head.append("<link type='text/css' rel='stylesheet' href='" + this + "'>");
	                    });
	                } else {
	                    $head.append("<link type='text/css' rel='stylesheet' href='" + opt.loadCSS + "'>");
	                }
	            }
	
	            // print header
	            if (opt.header) $body.append(opt.header);
	
	            // grab $.selector as container
	            if (opt.printContainer) $body.append($element.outer());
	
	            // otherwise just print interior elements of container
	            else $element.each(function() {
	                $body.append($(this).html());
	            });
	
	            // capture form/field values
	            if (opt.formValues) {
	                // loop through inputs
	                var $input = $element.find('input');
	                if ($input.length) {
	                    $input.each(function() {
	                        var $this = $(this),
	                            $name = $(this).attr('name'),
	                            $checker = $this.is(':checkbox') || $this.is(':radio'),
	                            $iframeInput = $doc.find('input[name="' + $name + '"]'),
	                            $value = $this.val();
	
	                        //order matters here
	                        if (!$checker) {
	                            $iframeInput.val($value);
	                        } else if ($this.is(':checked')) {
	                            if ($this.is(':checkbox')) {
	                                $iframeInput.attr('checked', 'checked');
	                            } else if ($this.is(':radio')) {
	                                $doc.find('input[name="' + $name + '"][value=' + $value + ']').attr('checked', 'checked');
	                            }
	                        }
	
	                    });
	                }
	
	                //loop through selects
	                var $select = $element.find('select');
	                if ($select.length) {
	                    $select.each(function() {
	                        var $this = $(this),
	                            $name = $(this).attr('name'),
	                            $value = $this.val();
	                        $doc.find('select[name="' + $name + '"]').val($value);
	                    });
	                }
	
	                //loop through textareas
	                var $textarea = $element.find('textarea');
	                if ($textarea.length) {
	                    $textarea.each(function() {
	                        var $this = $(this),
	                            $name = $(this).attr('name'),
	                            $value = $this.val();
	                        $doc.find('textarea[name="' + $name + '"]').val($value);
	                    });
	                }
	            } // end capture form/field values
	
	            // remove inline styles
	            if (opt.removeInline) {
	                // $.removeAttr available jQuery 1.7+
	                if ($.isFunction($.removeAttr)) {
	                    $doc.find("body *").removeAttr("style");
	                } else {
	                    $doc.find("body *").attr("style", "");
	                }
	            }
	
	            setTimeout(function() {
	                if ($iframe.hasClass("MSIE")) {
	                    // check if the iframe was created with the ugly hack
	                    // and perform another ugly hack out of neccessity
	                    window.frames["printIframe"].focus();
	                    $head.append("<script>  window.print(); </script>");
	                } else {
	                    // proper method
	                    if (document.queryCommandSupported("print")) {
	                        $iframe[0].contentWindow.document.execCommand("print", false, null);
	                    } else {
	                        $iframe[0].contentWindow.focus();
	                        $iframe[0].contentWindow.print();
	                    }
	                }
	
	                //remove iframe after print
	                if (!opt.debug) {
	                    setTimeout(function() {
	                        $iframe.remove();
	                    }, 1000);
	                }
	
	            }, opt.printDelay);
	
	        }, 333);
	
	    }
	
	    var settings = extend({
	        debug: false,           // show the iframe for debugging
	        importCSS: true,        // import parent page css
	        importStyle: false,     // import style tags
	        printContainer: true,   // print outer container/$.selector
	        loadCSS: "",            // load an additional css file - load multiple stylesheets with an array []
	        pageTitle: "",          // add title to print page
	        removeInline: false,    // remove all inline styles
	        printDelay: 333,        // variable print delay
	        header: null,           // prefix to html
	        formValues: true,        // preserve input/form values
	        doctypeString: '<!DOCTYPE html>' // html doctype
	    },options);
	
	    return target.each(function(index) {
	      var me = $(this);  
	        return new Plugin(me,settings);
	    });
	}
	
	module.exports = printThis;

/***/ }

});
//# sourceMappingURL=majorExam3.js.map