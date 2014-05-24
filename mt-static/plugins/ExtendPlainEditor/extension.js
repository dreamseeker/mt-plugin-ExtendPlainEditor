(function ($) {
	var config   = MT.Editor.TinyMCE.config,
		buttons = 'ext_btn_div,ext_btn_span,ext_btn_pre,|,ext_btn_h1,ext_btn_h2,ext_btn_h3,ext_btn_h4,ext_btn_h5,ext_btn_h6,|,ext_btn_img_left,ext_btn_img_right';
	
	

	$.extend(config, {
		plugin_mt_source_buttons2: buttons,
		setup: function(ed) {
			// target texarea ID
			var ta		= $(ed).attr('id');
			var cv		= $('#convert_breaks');
			var cv_val	= cv.val();

			// set cv val
			cv.on('change', function(){
				cv_val	= cv.val();
			});

			// div
			ed.addButton('ext_btn_div', {
				title: 'div',
				onclick: function(e) {
					e.preventDefault();
					$('#' + ta)
						.selection('insert', {text: '<div>', mode: 'before'})
						.selection('insert', {text: '</div>', mode: 'after'});
				}
			});

			// span
			ed.addButton('ext_btn_span', {
				title: 'span',
				onclick: function(e) {
					e.preventDefault();
					$('#' + ta)
						.selection('insert', {text: '<span>', mode: 'before'})
						.selection('insert', {text: '</span>', mode: 'after'});
				}
			});

			// pre
			ed.addButton('ext_btn_pre', {
				title: 'pre',
				onclick: function(e) {
					e.preventDefault();
					$('#' + ta)
						.selection('insert', {text: '<pre>', mode: 'before'})
						.selection('insert', {text: '</pre>', mode: 'after'});
				}
			});

			// h1
			ed.addButton('ext_btn_h1', {
				title: 'h1',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h1>', mode: 'before'})
							.selection('insert', {text: '</h1>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n# ', mode: 'before'});
					}
				}
			});

			// h2
			ed.addButton('ext_btn_h2', {
				title: 'h2',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h2>', mode: 'before'})
							.selection('insert', {text: '</h2>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n## ', mode: 'before'});
					}
				}
			});

			// h3
			ed.addButton('ext_btn_h3', {
				title: 'h3',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h3>', mode: 'before'})
							.selection('insert', {text: '</h3>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n### ', mode: 'before'});
					}
				}
			});

			// h4
			ed.addButton('ext_btn_h4', {
				title: 'h4',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h4>', mode: 'before'})
							.selection('insert', {text: '</h4>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n#### ', mode: 'before'});
					}
				}
			});

			// h5
			ed.addButton('ext_btn_h5', {
				title: 'h5',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h5>', mode: 'before'})
							.selection('insert', {text: '</h5>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n##### ', mode: 'before'});
					}
				}
			});

			// h6
			ed.addButton('ext_btn_h6', {
				title: 'h6',
				onclick: function(e) {
					e.preventDefault();

					if(cv_val == 0 || cv_val === '__default__'){
						$('#' + ta)
							.selection('insert', {text: '<h6>', mode: 'before'})
							.selection('insert', {text: '</h6>', mode: 'after'});
					} else if(cv_val.indexOf('markdown') > -1) {
						$('#' + ta).selection('insert', {text: '\n###### ', mode: 'before'});
					}
				}
			});

			// ext_btn_img_left
			ed.addButton('ext_btn_img_left', {
				title: 'float-L',
				onclick: function(e) {
					e.preventDefault();
					$('#' + ta).selection('insert', {text: ' class="mt-image-left"', mode: 'before'});
				}
			});

			// ext_btn_img_right
			ed.addButton('ext_btn_img_right', {
				title: 'float-R',
				onclick: function(e) {
					e.preventDefault();
					$('#' + ta).selection('insert', {text: ' class="mt-image-right"', mode: 'before'});
				}
			});
		}
	});
}(jQuery));
