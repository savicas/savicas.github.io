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
			var newItem = '<li><input type="checkbox" class="checkbox"><span>' + getItem() + '</span><input type="reset" value="Delete" class="delete"></li>';
			$(newItem).appendTo("#itemList");

			$("#item").val('');
			$('#item').focus();
		}
	});

	$("#itemList").on("click", ".checkbox", function(){
		$(this).siblings('span').toggleClass('lineThrough').show();
	});

	$("#itemList").on("click", ".delete", function() {
		$(this).closest('li').remove();
	});

});










