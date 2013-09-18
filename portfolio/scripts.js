$(document).ready(function() {

	$('section a').on('mouseenter', function(e){
		e.preventDefault();
		e.stopPropagation();
		var project = $(this).val()
    	,	object = [
		{
			object: "This is the <a href='http://savicas.github.io/googleHomePage/'> Google Home Page <a/>replica. ",
			programming : ["HTML, CSS"],
		},
		{
			object: "This is the <a href='http://savicas.github.io/37signals/'> 37 Signals Home Page <a/>replica. ",
			programming : ["HTML, CSS", "jQuery"],
		},
				{
			object: "This is a <a href='http://savicas.github.io/hotCold/'> Hot and Cold game <a/>. ",
			programming : ["HTML, CSS", "jQuery", "JavaScript"],
		},
				{
			object: "This is a <'http://savicas.github.io/shoppingList/'> Shopping List App <a/>. ",
			programming : ["HTML, CSS","jQuery", "JavaScript"],
		},
				{
			object: "This is a <a href='http://savicas.github.io/quizzApp/'> Quizz App <a/>. ",
			programming : ["HTML, CSS","jQuery", "JavaScript"],
		},
				{
			object: "This is a project with <a href='#'> APIs of Google Maps and BART.org <a/>. ",
			programming : ["HTML, CSS","jQuery", "JavaScript"],
		},
	];

		if (project === true) {
			// $(this).toggleClass(".projectCurtain");

		}

	});
});