$(document).ready(function(){

	$(".templates").attr("templates/home.html");
	
	$(".navBar a").click( function() {
		
		
		$(".templates").show();

		$(".templates").load($(this).attr("href")).hide().fadeIn();
        	return(false);
	});




});