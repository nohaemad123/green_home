/*global $, alert, document, eq */

$(function () {
	'use strict';

	$("html").niceScroll();

	$('.carousel').carousel({
		interval: 2000
	});
	
			$(".projects .mix").mixItUp();


	$('.media-carousel').carousel({interval:2000});

	var scrolltop = $('.scroll i');
	scrolltop.click(function () {
		$('html,body').animate({
			scrollTop: 0
		}, 3000);
	});
	    $('[data-toggle="tooltip"]').tooltip();
	


});