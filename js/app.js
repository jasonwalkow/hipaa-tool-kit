/* FSVS SLIDER
$(document).ready( function() {
	var fsvs = $.fn.fsvs({
		speed : 5000,
		bodyID : 'fsvs-body',
		selector : '> .slide',
		mouseSwipeDisance : 40,
		afterSlide : function(){},
		beforeSlide : function(){},
		endSlide : function(){},
		mouseWheelEvents : true,
		mouseDragEvents : true,
		touchEvents : true,
		arrowKeyEvents : true,
		pagination : true,
		nthClasses : false,
		detectHash : true
	});
});

$(document).ready( function() {
	var slider = $.fn.fsvs({
		...
		endSlide : function(index) {
			$('<div class="slide"><h2>Slide ' + (index+2) + '</h2></div>').appendTo( $('body') );
			// reset the nth classes if you need it
			slider.nthClasses(3);
			// rebind pagination if you need it
			slider.addPagination();
		}
		...
	});
});*/