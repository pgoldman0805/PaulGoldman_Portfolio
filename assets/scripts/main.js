// When the Document Object Model is ready
$(document).ready(function(){


	// $(document).on('scroll', function (e) {
	// 	// var alpha = $(document).scrollTop() / 550;
	//
    // //  $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
	// });

  / 'aboutTopPosition' is the amount of pixels #about
  / is from the top of the document
  ar aboutTopPosition = $('#about').offset().top;
  ('#about-link').click(function(){
  // Scroll down to 'aboutTopPosition'
  $('html, body').animate({scrollTop:aboutTopPosition}, 'slow');
  });

    	var portfolioTopPosition = $('#portfolio').offset().top;
  ('#portfolio-link').click(function(){
  $('html, body').animate({scrollTop:portfolioTopPosition}, 'slow');
  });

     	var contactTopPosition = $('#contact').offset().top;
  ('#contact-link').click(function(){
  $('html, body').animate({scrollTop:contactTopPosition}, 'slow');
  });
});
