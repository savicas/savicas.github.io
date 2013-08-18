$(document).ready(function(){
	var secretNum = Math.floor(Math.random()*50);
	$("#submit").on("click", function(e){
		e.preventDefault();
		e.stopPropagation();
		console.log(secretNum);
		var num = parseInt($("#input").val());
		console.log(num);
		if((! $.isNumeric(num)) || (num < 0) || (num > 50)) {
			alert("It has to be a number, between 0 and 50. Please, try again.");
			$("#input").val("");
		} else {
			if (num < secretNum) {
				diff = secretNum - num;
				if (diff > 3) {
					$(".hide").css({"visibility" : "hidden"});
					$("#gettingCold").css({"visibility": "visible"});
				} else {
					$(".hide").css({"visibility" : "hidden"});
					$("#gettingHot").css({"visibility": "visible"});
				}
			}
			if (num > secretNum) {
				diff = num - secretNum;
				if (diff > 3) {
					$(".hide").css({"visibility" : "hidden"});
					$("#gettingCold").css({"visibility": "visible"});
				} else {
					$(".hide").css({"visibility" : "hidden"});
					$("#gettingHot").css({"visibility": "visible"});
				}
			}
			if (num === secretNum) {
				$(".hide").css({"visibility" : "hidden"});
				$("#congrats").css({"visibility": "visible"});
			}
		}
	});
});







