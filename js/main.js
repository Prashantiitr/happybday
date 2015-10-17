//parallax scroll

$(document).ready(function(){

 $window = $(window);
 
 $('section[data-type="background"]').each(function(){
   var $scroll = $(this);

   $(window).scroll(function() {                          
    var yPos = -($window.scrollTop() / $scroll.data('speed'));
    var coords = '50% '+ yPos + 'px';
    $scroll.css({ backgroundPosition: coords });   
      }); // end window scroll
   });  // end section function
}); // close out script

/* Create HTML5 element for IE */
document.createElement("section");

// welcome ** typed.js by http://www.mattboldt.com/ **

$(function(){
  $(".welcomeText").typed({
    strings: ["Happy Birthday!", "Buon Compleanno!", "Janam Din Ki Badhai!", "Joyeux Anniversaire!", "Janam Din Diyan Wadhayian!"],
        typeSpeed: 40, // typing speed
        backDelay: 500, // pause before backspacing
        loop: true, // loop on or off (true or false)
        loopCount: false, // number of loops, false = infinite
      });
});

//nav

$(document).ready(function(){

  $(".navbar").hide();

  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.navbar').fadeIn();
      } else {
        $('.navbar').fadeOut();
      }
    });
  });

});

//tooltip

$(document).ready(function(){

  $("[data-toggle=tooltip]").tooltip();

});

//descriptions

$(document).ready(function(){

  $(".info").on("click", function() {
    $('.descSection').removeClass('hide'); 
    $('.description').hide();
    $('#desc'+$(this).attr('data-desc')).show();
    $('html, body').animate({scrollTop: +($('.alldescriptions').offset().top) +($('.descSection').height())}, 800);

  });


  $(".fecha").on("click", function() {
    $('.descSection').addClass('hide');
    $('html, body').animate({scrollTop: $('.works').offset().top }, 600);
  });
}); 

//carousel

$(document).ready(function(){
    $('.carousel').carousel({
      interval: 2000
    });
  });



 //delay
//   $(document).ready(function(){
//   window.scrollReveal = new scrollReveal();
// });


// timeline
jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}
});
