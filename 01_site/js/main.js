

// vanishing “introducing”

var h2 = $('.introduction h2');
$(window).on('scroll', function() {
   var st = $(this).scrollTop();
   h2.css({ 'opacity' : (1 - st/350) });
});



if ($(window).width() < 600) {
	    	var h2bis = $('.introduction h2');
			$(window).on('scroll', function() {
			   var st = $(this).scrollTop();
			   h2bis.css({ 'opacity' : (1 - st/200) });
			});
	  	};






// Imagine


$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','0');
	}, { offset: '1200px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.05');
	}, { offset: '1150px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.1');
	}, { offset: '1100px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.15');
	}, { offset: '1050px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.2');
	}, { offset: '1000px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.25');
	}, { offset: '950px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.3');
	}, { offset: '900px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.35');
	}, { offset: '850px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.4');
	}, { offset: '800px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.45');
	}, { offset: '750px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','1');
	}, { offset: '700px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.8');
	}, { offset: '600px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.6');
	}, { offset: '500px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.4');
	}, { offset: '400px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','.2');
	}, { offset: '300px'});

$('.waypoint-break').waypoint(function() {
		$('p.imagine-pic').css('opacity','0');
	}, { offset: '200px'});




$('.stylet-wireframe').waypoint(function() {
		$('#stylet-svg path').css('-webkit-animation','animstylet 1.5s ease-in-out forwards');
	}, { offset: '400px'});

$('.stylet-wireframe').waypoint(function() {
		$('#stylet-svg line').css('-webkit-animation','animstylet 2s ease-out forwards 1s');
	}, { offset: '400px'});

$('.stylet-wireframe').waypoint(function() {
		$('#stylet-svg ellipse').css('-webkit-animation','animstylet 2.5s ease-in forwards');
	}, { offset: '400px'});


$('.svg-container .p-svg-right.right-one').waypoint(function() {
		$('.svg-container .p-svg-right').addClass('text-stylet-opacity');
	}, { offset: '100px'});

$('.svg-container .p-svg-left.left-one').waypoint(function() {
		$('.svg-container .p-svg-left').addClass('text-stylet-opacity');
	}, { offset: '200px'});

$('.svg-container .p-svg-right.right-one').waypoint(function() {
		$('.svg-container .p-svg-right').addClass('after-line-stylet');
	}, { offset: '100px'});

$('.svg-container .p-svg-left.left-one').waypoint(function() {
		$('.svg-container .p-svg-left').addClass('after-line-stylet');
	}, { offset: '200px'});


$('.workspace-menu-txt-two').waypoint(function() {
		$('.workspace-menu').removeClass('bg-opacity');
	}, { offset: '480px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.workspace-menu-txt-two').css('opacity','1');
	}, { offset: '480px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.nite-menu').css('opacity','1');
	}, { offset: '480px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.day-menu').css('opacity','0');
	}, { offset: '490px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.workspace-menu').addClass('bg-opacity');
	}, { offset: '500px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.workspace-menu-txt-two').css('opacity','0');
	}, { offset: '500px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.nite-menu').css('opacity','0');
	}, { offset: '500px'});

$('.workspace-menu-txt-two').waypoint(function() {
		$('.day-menu').css('opacity','1');
	}, { offset: '510px'});


