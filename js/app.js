
$(document).ready(function() {
	function scrollToAnchor(aid){
		var aTag = $("a[name='"+ aid +"']");
		$('html,body').animate({scrollTop: aTag.offset().top},'slow');
	}
	$(".navbar a").click(function(event) {
		event.preventDefault();
		var href = $(this).attr('href').replace('#', '')
		scrollToAnchor(href);
	});	
	$(".by-line .to-top").click(function(event) {
		event.preventDefault();
		var href = $(this).attr('href').replace('#', '')
		scrollToAnchor(href);
	});	
});