$(document).ready(
	//a handler is really just a function that is used imediately
	function() {
		
		//when the button is clicked a 2nd time (supports dynamic creation)
		$(document).on("dblclick", "p", function() {
			//removes it from the website
			$(this).remove();
		});
		
			$("#section0").click(function() {
			//turn on and off the block of text
			$("#block0").toggle();
		});
		});