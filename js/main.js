 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll',
    horizontalOffset: 0,
	  verticalOffset: 0
  });

  // Scrollax
  $.Scrollax();


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	// var OnePageNav = function() {
	// 	$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
	// 	 	e.preventDefault();

	// 	 	var hash = this.hash,
	// 	 			navToggler = $('.navbar-toggler');
	// 	 	$('html, body').animate({
	// 	    scrollTop: $(hash).offset().top
	// 	  }, 700, 'easeInOutExpo', function(){
	// 	    window.location.hash = hash;
	// 	  });


	// 	  if ( navToggler.is(':visible') ) {
	// 	  	navToggler.click();
	// 	  }
	// 	});
	// 	$('body').on('activate.bs.scrollspy', function () {
	// 	  console.log('nice');
	// 	})
	// };
	// OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: true,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $('.appointment_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});

	$('.appointment_time').timepicker();


})(jQuery);

//Save Subscribers
async function saveNewPerson() {
	if (document.getElementById('emailId').value != null && document.getElementById('emailId').value != '') {
		const subscribers = new Parse.Object("Subscribers");
		subscribers.set("email", document.getElementById("emailId").value);
		try {
			let result = await subscribers.save();
			document.getElementById("emailId").value = '';
			document.getElementById("response").innerHTML = 'Thanks for subscribining to our newsletter. We will get in touch with you soon.';
		} catch (error) {
			document.getElementById("response").innerHTML = 'You were not subscribed.';
		}
	} else {
		document.getElementById("response").innerHTML = 'No Email id entered.';
	}

}

//Save support
async function saveNewSupport() {
	if (document.getElementById("userName").value != null && document.getElementById("userName").value != '') {
		if (document.getElementById("userEmailId").value != null && document.getElementById("userEmailId").value != '') {
			if (document.getElementById("subject").value != null && document.getElementById("subject").value != '') {
				if (document.getElementById("message").value != null && document.getElementById("message").value != '') {
					const support = new Parse.Object("Support");
					support.set("name", document.getElementById("userName").value);
					support.set("email", document.getElementById("userEmailId").value);
					support.set("subject", document.getElementById("subject").value);
					support.set("message", document.getElementById("message").value);
					try {
						let result = await support.save()
						console.log('New support created with objectId: ' + result.id);
						document.getElementById("userName").value = '';
						document.getElementById("userEmailId").value = '';
						document.getElementById("subject").value = '';
						document.getElementById("message").value = '';
						document.getElementById("response").innerHTML = 'Thanks for submitting your message. We will get in touch with you soon.';
					} catch (error) {
						console.log('Failed to save new support, with error code: ' + error.message);
						document.getElementById("response").innerHTML = 'Your support ticket was not created';
					}
				} else {
					console.log('No message entered, with error code: ');
					document.getElementById("response").innerHTML = 'No message entered';
				}
			}
			else {
				console.log('No subject entered, with error code: ');
				document.getElementById("response").innerHTML = 'No subject entered';
			}
		}
		else {
			console.log('No Email Id entered, with error code: ');
			document.getElementById("response").innerHTML = 'No Email id entered';
		}
	}
	else {
		console.log('No name entered, with error code: ');
		document.getElementById("response").innerHTML = 'No name entered';
	}
}

