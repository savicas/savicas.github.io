$(document).ready(function(){
	$('#item').focus();

	function getItem(){
		return $("#item").val();
	}

	$("#add").on("click",function(e){
		e.preventDefault();
		e.stopPropagation();

		var newItem = '<input type="checkbox">' + '<span>' + getItem() + '</span>' + '<input type="reset" value="Delete">' + '<br/>';
		console.log(newItem);
		$(newItem).appendTo("div");

		$("#item").val('');
		$('#item').focus();
	});

});

