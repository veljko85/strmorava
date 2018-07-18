$(document).ready(function(){

	$(".templates").load("templates/home.html");
	
	$(".navBar a").click( function() {

		$(".templates").load($(this).attr("href")).hide().fadeIn();
        	return(false);
	});




});