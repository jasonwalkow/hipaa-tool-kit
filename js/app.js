$(document).ready(function() {
	function scrollToAnchor(aid){
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	$(".scroll-click").click(function(event) {
		event.preventDefault();
		var href = $(this).attr('href').replace('#', '');
		scrollToAnchor(href);
	});	
	$('#myNavbar').scrollspy({
        min: $('#myNavbar').offset().top,
        onEnter: function(element, position) {
            $(".navbar-inverse .navbar-nav li a").addClass("active");
            },
        onLeave: function(element, position) {
            $(".navbar-inverse .navbar-nav li a").removeClass("active");
            }
    });
});