$(document).ready( function() {

	var currentScore = 0
	  , questions = [
		{
			question: "Which city is under a project called MOSE (Experimental Electromechanical Module)?<br>Hint: it is a project intended to protect the city from floods. The city is actually sinking because it was constructet under a salt marsh.",
			choices : ["New Orleans, USA", "Venice, Italy", "Guayaquil, Equador", "Palembang, Indonesia"],
			correct: 1
		},
		{
			question: "Which one of these megacities is the biggest one?",
			choices: ["Sao Paul", "Tokyo", "Numbai (Bombay)", "Mexico City"],
			correct: 1,
		},
		{
			question: "Which city in the whole US is the most smoggiest?",
			choices: ["Bakersfield", "Los Angeles", "Houston", "Baltimore"],
			correct: 1,
		},
		{
			question: "Which city is the most famous for its carnivals?",
			choices: ["Santa Cruz de Tenerife, Spain", "Venice, Italy", "Rio de Janeiro, Brazil", "Nice, France"],
			correct: 2,
		},
		{
			question: "Which country was the first to import its coffee that originates the importation around the globe?",
			choices: ["Turkey", "Egypt", "Saudi Arabia", "Ethiopia"],
			correct: 3,
		},
	];


	$('.questions').on('click', '.submit', function() {
		var parent = $(this).parent() //parent of button
		  , answers = parent.find('input[type=radio]') // find the radio buttons of the parent of button which is section
		  , selectedAnswer = parent.find('input[type=radio]:checked')// find the checked radio button
		  , answerPosition = answers.index(selectedAnswer) // find the position of the selected input in the set of radio buttons
		  , questionNumber = parent.data('question-number') // save the position of the current question in the array of questions
		  , userHasAnswered = selectedAnswer.length > 0 // if there's a radio button checked do
		  , answerIsCorrect = answerPosition === questions[questionNumber].correct // compare if the position of the selected answer is equal to the correct answer of the current question
		  , nextQuestion = questions[questionNumber+1];

		if (userHasAnswered) {
			$(this).hide();
			if (answerIsCorrect) {
				parent.find('.correctIcon').show();
				currentScore = currentScore + 2;
				$('#currentScore').text(currentScore);
			} else {
				parent.find('.incorrectIcon').show();
			}
			if (nextQuestion === undefined) {
				$('.totalScoreNumber').text(currentScore);
				$('#totalScore').fadeIn();
			} else {
				displayQuestion(nextQuestion);
			}
		} else {
			alert('Please answer the question first.');
		}
	});


	// generates the HTML for the given question and shows it
	function displayQuestion(questionObject) {
		var html = $('div[data-template=question]').html(); // stores the HTML template for the question in the variable
		html = html.replace('$question', questionObject.question);
		html = html.replace('$numberOfQuestion', questions.indexOf(questionObject))

		// TO DO: make this more flexible to allow any number of choices for each question
		html = html.replace('$choice0', questionObject.choices[0]);
		html = html.replace('$choice1', questionObject.choices[1]);
		html = html.replace('$choice2', questionObject.choices[2]);
		html = html.replace('$choice3', questionObject.choices[3]);

		$('.questions').append(html);
	};

	displayQuestion(questions[0]);
});
