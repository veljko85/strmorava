$(document).ready(function(){


	
	$(".navBar a").click( function() {
		
		$(".homeItems").hide();
		$(".templates").show();


		
		$(".main").load($(this).attr("href")).hide().fadeIn();
        	return(false);
	});




});