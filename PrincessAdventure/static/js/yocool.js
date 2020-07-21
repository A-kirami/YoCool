// var link = [];
//   link[0] = "{{ url_for('yobot_static', filename='css/style1.css') }}";
//   link[1] = "{{ url_for('yobot_static', filename='css/style2.css') }}";
//   link[2] = "{{ url_for('yobot_static', filename='css/style3.css') }}";

//   $(function() {
//   	var style = link[Math.floor(Math.random() * link.length)];
//   	if (document.createStyleSheet) {
//   		document.createStyleSheet(style);
//   	} else {
//   		$('<link />', {
//   			rel: 'stylesheet',
//   			href: style
//   		}).appendTo('head');
//   	}
//   });

var 

  $(function() {
  	$(window).scroll(function() {
  		var topToolbar = $("#topToolbar");
  		var headerH = $("#header").outerHeight();
  		var scrollTop = $(document).scrollTop();
  		if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
  			if (scrollTop >= headerH) {
  				topToolbar.show();
  			} else if (scrollTop < headerH) {
  				topToolbar.hide();
  			}
  		} else {
  			if (scrollTop >= headerH) {
  				topToolbar.stop(false, true).animate({
  					'top': 0
  				});
  			} else if (scrollTop < headerH) {
  				topToolbar.stop(false, true).animate({
  					'top': -40
  				});
  			}
  		};
  	});
  });
