// JavaScript Document

var CURRENT_MODE = 'home';
var IMAGES = new Array();
var ANIMATION_TIME = 500;

function transition(toMode){
	toMode = toMode.slice(1, toMode.length);
	if(!(CURRENT_MODE == toMode)){
		var line = $('#menu_underline');
		var currentModeString = '#'+ CURRENT_MODE;
		line.animate(
					 {opacity:0},
					 ANIMATION_TIME,
					 function() {
						$(currentModeString).animate(
													 {opacity:0}, 
													 ANIMATION_TIME, 
													 function() { 
													 	$(currentModeString).hide(); 
														});
						line.removeClass();
						line.addClass(toMode);
						line.animate( 
							{opacity:1}, 
							ANIMATION_TIME,
							function() {
								$('#modes').removeClass();
								switch(toMode){
									case 'home':
										$('#home').show().animate({opacity:1}, ANIMATION_TIME);
										break;
									case 'about':
										line.animate({opacity:1}, ANIMATION_TIME);
										$('#about').show().animate({opacity:1}, ANIMATION_TIME);
										break;
									case 'resume':
										line.animate({opacity:1}, ANIMATION_TIME);
										$('#modes').addClass('resume');
										$('#resume').show().animate({opacity:1}, ANIMATION_TIME);
										break;
									case 'gallery':
										line.animate({opacity:1}, ANIMATION_TIME);
										$('#gallery').show().animate({opacity:1}, ANIMATION_TIME);
										break;
								}
							});
						}
					 );
		
	}
		
	CURRENT_MODE=toMode;
}
							   

$(document).ready( function() {
							if(location.hash != ""){ transition(location.hash); }
							
							$('.button').click( function() { transition($(this).attr('href')); } );
							
							$('.single_image').fancybox();
														
							});