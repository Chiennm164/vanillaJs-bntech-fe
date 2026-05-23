/* Shared inline scripts — merged from per-page <script> blocks. */

$(document).ready(function () {
	// Desktop header: hover effect on home pages
	$(document)
		.on('mouseenter', '.pc-header.ishome .main-menu li', function () {
			$(this).closest('.pc-header').addClass('hovering');
		})
		.on('mouseleave', '.pc-header.ishome .main-menu li', function () {
			$(this).closest('.pc-header').removeClass('hovering');
		});

	// Mobile menu toggle
	$(document).on('click', '.mobile-header .btn-open-categories', function (e) {
		e.preventDefault();
		var $this = $(this);
		$this.toggleClass('active');
		$this.closest('.dropdown-menu').find('.dropdown-box').toggleClass('active');
	});

	// Search dropdown toggle
	$(document).on('click', '.open-search', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$('.top-search').toggleClass('active').slideToggle();
		return false;
	});

	// Prevent navigation for hash-only main menu links
	$(document).on('click', '.main-menu>li>a', function () {
		if ($(this).attr('href') === '#') return false;
	});

	// Close search button
	$(document).on('click', '.btn-close', function () {
		$(this).closest('header').find('.open-search').trigger('click');
	});

	// Outside-click: close mobile menu and search
	$('body').on('click', function (e) {
		var $target = $(e.target);

		if (!$target.is('.mobile-hd-categories') && $('.mobile-hd-categories').has(e.target).length === 0) {
			$('.mobile-hd-categories .btn-open-categories.active').removeClass('active');
			$('.mobile-hd-categories .dropdown-box.active').removeClass('active');
		}

		if (!$target.is('.hd-menu-search') && $('.hd-menu-search').has(e.target).length === 0) {
			$('.open-search.active').removeClass('active');
			if ($('.top-search.active').length) {
				$('.top-search').removeClass('active').slideUp();
			}
		}
	});

	// Back-to-top click
	$('#backtop').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: 0 }, 500);
	});

	// WOW.js animations (desktop only)
	if (typeof WOW !== 'undefined' && $(window).width() >= 1220) {
		new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: true,
			live: true,
			resetAnimation: true
		}).init();
	}
});

// Header sticky + back-to-top visibility on scroll
$(window).on('load', function () {
	var h_header = $('.pc-header').outerHeight();
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		$('.pc-header').toggleClass('fixed', scroll >= h_header);
		$('#backtop').toggleClass('active', scroll > 50);
	});
});
