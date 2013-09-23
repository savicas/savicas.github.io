$(document).ready( function() {

	$('.project').on('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation();

		var img = $(this).find('img')
			, curtain = $(this).find('.curtain')
			, position = img.position()  		// we want to position the curtain in the same position than the current image
			, margin = img.css('margin')    // we get the margin of the image
																			// and apply it as the margin of the curtain, so the image and the curtain occupy the same space

		curtain.css('left', position.left)
		       .css('top', position.top)
		       .css('margin', margin)
		       .css('position', 'absolute')
					 .fadeIn();
	});

	$('.project').on('mouseleave', function(e){
		e.preventDefault();
		e.stopPropagation();

		$(this).find('.curtain').fadeOut();
	});

});