// When the Document Object Model is ready
$(document).ready(function(){

	$(".nav a").on("click", function(){
	   $(".nav").find(".active").removeClass("active");
	   $(this).parent().addClass("active");
	});

  // (document).on('scroll', function (e) {
  // // var alpha = $(document).scrollTop() / 550;
  //
  //   //  $('.navbar-default').css('background-color', 'rgba(255, 255, 255,' + alpha + ')');
  //
  //
  // /   'aboutTopPosition' is the amount of pixels #about
  // /   is from the top of the document
  // /   var aboutTopPosition = $('#about-row').offset().top;
  // /   $('#about-row').click(function(){
  // /   // Scroll down to 'aboutTopPosition'
  // /   $('html, body').animate({scrollTop:aboutTopPosition}, 'slow');
  // /   });
  //  //
  // /     	var portfolioTopPosition = $('#portfolio-row').offset().top;
  // /   $('#portfolio-row').click(function(){
  // /   $('html, body').animate({scrollTop:portfolioTopPosition}, 'slow');
  // /   });
  //  //
  // /      	var contactTopPosition = $('#contact-row').offset().top;
  // /   $('#contact-row').click(function(){
  // /   $('html, body').animate({scrollTop:contactTopPosition}, 'slow');
  // /   });
  // });




});
