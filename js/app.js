var main = function() {
	$('form').submit(function(event) {   //function is called whenever form is submitted (i.e. event)
		var $input = $(event.target).find('input');
		var comment = $input.val();
		event.preventDefault();
		if (comment != "") {
			var html = $('<li>').text(comment);
			$('#comments').prepend(html);    //html.prepend('#commments');
			$input.val("");
			console.log("is this working?");
		}
		return false;
	});
}

$(document).ready(main);