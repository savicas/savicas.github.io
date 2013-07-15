$(function(){

	$(".boxes").on("mouseenter", function() {
		var selected = $(this).data("trigger");
		$('.'+ selected).show();
		$('.remove').hide();
	});
	$(".boxes").on("mouseleave", function() {
		var selected = $(this).data("trigger");
		$('.'+ selected).hide();
		$('.remove').show();
	});
});