$(document).ready(function(){
	$('#item').focus();

	function getItem(){
		return $("#item").val();
	}

	$("#add").on("click",function(e){
		e.preventDefault();
		e.stopPropagation();

		if (getItem() === '') {
			alert("You need to write something to create the element list");
			$('#item').focus();

		} else {
			var newItem = '<input type="checkbox">' + '<span>' + getItem() + '</span>' + '<input type="reset" value="Delete">' + '<br/>';
			$(newItem).appendTo("div");

			$("#item").val('');
			$('#item').focus();
		}

	});

});











