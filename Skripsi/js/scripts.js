$(".carousel-item .card").click(function(e){ // carousel item clicked
	console.log(e)
	$('.carousel-item .card').css({boxShadow:'none',transform:'scale(1)'})
	$(this).css({boxShadow:'0 0 15px #4f4f4f',transform:'scale(1.1)'})
	$(".desc").html($(this).data('desc'))
})
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}

$("a").click(function() {
	window.location = $(this).attr("href")
})

jQuery(document).ready(function() {
	/*
	    Navigation
	*/
	$('.carousel').carousel('pause')
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});

    /*
        Background
    */
    $('.section-4-container').backstretch("assets/img/backgrounds/bg.jpg");

    /*
	    Wow
	*/
	new WOW().init();

	/*
	    Carousel
	*/
	$(".carousel").swipe({
		swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
			if (direction == 'left') jQuery(this).carousel('next');
			if (direction == 'right') jQuery(this).carousel('prev');
		}
	});
	$('#carousel-example').on('slide.bs.carousel', function (e) {
	    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
	    var $e = $(e.relatedTarget);
	    var idx = $e.index();
	    var itemsPerSlide = 3;
	    var totalItems = $('.carousel-item').length;

	    if (idx >= totalItems-(itemsPerSlide-1)) {
	        var it = itemsPerSlide - (totalItems - idx);
	        for (var i=0; i<it; i++) {
	            // append slides to end
	            if (e.direction=="left") {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	            else {
	                $('.carousel-item').eq(i).appendTo('.carousel-inner');
	            }
	        }
	    }

	});
	$('.owl-carousel').owlCarousel({
	    center: true,
	    items:1,
			dots:false,
	    loop:true,
	    margin:10,
	    responsive:{
	        600:{
	            items:3
	        }
	    }
	});
	$('.owl-carousel').on('click', '.owl-item', function(e) {
	  var carousel = $('.owl-carousel').data('owl.carousel');
	  e.preventDefault();
	  carousel.to(carousel.relative($(this).index()));
	});
	$('.owl-carousel .item').click(function(){
		$('.owl-carousel .item').css({transform:"scale(1)"})
		$(this).css({transform:"scale(1.1)"})
		$('.owl-carousel .item .content').removeClass("opacity")
		var ctn = $(this).find('.content');
		ctn.addClass("opacity")
	})
});
