$(document).ready(function(){

//owl scripts
	
	$('.owl-video').owlCarousel({
		loop:true,
		margin:16,
		nav:false,
		dots: false,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			769:{
				items:2
			},
			1120:{
				items:2
			}
		}
	});
	
	$('.owl-videoMob').owlCarousel({
		loop:true,
		margin:16,
		nav:false,
		dots: true,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			769:{
				items:2
			},
			1120:{
				items:2
			}
		}
	});
	
	var owl = $('.owl-video');
	owl.owlCarousel();
	
	$('.videoArrowLeft').click(function() {
		owl.trigger('prev.owl.carousel');
	});
	
	$('.videoArrowRight').click(function() {
		owl.trigger('next.owl.carousel');
	});
	
//mobileMenuScripts
	
	var navigation = {
	  // Variables
	  $nav: document.querySelector('.nav'),
	  $navTrigger: document.querySelector('.nav__trigger'),
	  $navContent: document.querySelector('.nav__content'),
	  $navList: document.querySelector('.nav__list'),
	  transitionEnd: 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',

	  init() {
		var self = this;

		// Handle the transitions
		self.$navTrigger.addEventListener('click', function () {
		  if (!self.$navTrigger.classList.contains('is-active')) {
			// .nav--trigger active
			self.$navTrigger.classList.add('is-active');

			// .nav active
			if (!self.$nav.classList.contains('is-active')) {
			  self.$nav.classList.add('is-active');
			  self.$nav.addEventListener('transitionend', function (e) {
				if (e.propertyName == 'width' && self.$navTrigger.classList.contains('is-active')) {
				  // .nav__content active
				  self.$navContent.classList.add('is-active');
				}
			  });
			} else {
			  self.$navContent.classList.add('is-active');
			}

			// no-csstransitions fallback
			if (document.documentElement.classList.contains('no-csstransitions')) {
			  self.$navContent.classList.add('is-active');
			}
		  } else {
			// .nav--trigger inactive
			self.$navTrigger.classList.remove('is-active');

			// .nav__content inactive
			if (self.$navContent.classList.contains('is-active')) {
			  self.$navContent.classList.remove('is-active');
			  self.$navContent.addEventListener('transitionend', function (e) {
				if (e.propertyName == 'opacity' && !self.$navTrigger.classList.contains('is-active')) {
				  // .nav inactive
				  self.$nav.classList.remove('is-active');
				}
			  });
			} else {
			  self.$nav.classList.remove('is-active');
			}

			// no-csstransitions fallback
			if (document.documentElement.classList.contains('no-csstransitions')) {
			  self.$nav.classList.remove('is-active');
			}
		  }
		});
	  } };


	navigation.init();
	
//second menu
	
	$('.equipment').click(function(){
		$('.equipment_rowsContainer').slideToggle(600);
		
	});
	
//show betterSee 
	
	$(window).scroll(function() {
	
		if($(this).scrollTop() > 500) {
			
			var delay = 0.4
			
			$('.about').find('.class2').each(function(e){	
				$(this).addClass('animate__animated animate__fadeInLeft');
				$(this).css('animation-delay', delay+'s');
				$(this).css('animation-duration', '.3s');
				delay += 0.05;	
			});
			
//			$('.class2').addClass('animate__animated animate__fadeInLeft');
			
		} else {
			
			$('.about').find('.class2').each(function(e){
				$(this).removeClass('animate__animated animate__fadeInLeft');
			});
			
		}
		
		
	
	});	
	
	
});