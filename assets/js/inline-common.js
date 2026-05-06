/* Auto-merged from repeated inline <script> blocks (no src). */
/* Source: cong-nghiep-lanh.html#script3 */
$(document).ready(function () {
				$(document).on('mouseenter', '.pc-header.ishome .main-menu li', function (event) {
					event.preventDefault();
					let _this = $(this);
					let closest = _this.closest('.pc-header').addClass('hovering');
				});
				$(document).on('mouseleave', '.pc-header.ishome .main-menu li', function (event) {
					event.preventDefault();
					let _this = $(this);
					let closest = _this.closest('.pc-header').removeClass('hovering');
				});
			});
			$(window).load(function () {
				var h_header = $('.pc-header').outerHeight();
				$(window).scroll(function () {
					let scroll = $(window).scrollTop();
					if (scroll >= h_header) {
						$('.pc-header').addClass('fixed');
					} else {
						$('.pc-header').removeClass('fixed');
					}
				});
			});

/* Source: cong-nghiep-lanh.html#script4 */
$(document).on('click', '.mobile-header .btn-open-categories', function (e) {
							e.preventDefault();
							let _this = $(this);
							_this.toggleClass('active');
							_this.closest('.dropdown-menu').find('.dropdown-box').toggleClass('active');
						});

						/*body click*/
						$('body').click(function (e) {
							var target = $(e.target);
							if (((!target.is('.mobile-hd-categories') && $('.mobile-hd-categories').has(e.target).length === 0))) {
								if ($('.mobile-hd-categories .btn-open-categories').hasClass('active')) {
									$('.mobile-hd-categories .btn-open-categories').removeClass('active');
									e.preventDefault();
								}
								if ($('.mobile-hd-categories .dropdown-box').hasClass('active')) {
									$('.mobile-hd-categories .dropdown-box').removeClass('active');
									e.preventDefault();
								}
							}
						});

/* Source: cong-nghiep-lanh.html#script5 */
var actual_link = $(location).attr('pathname');
		actual_link = actual_link.substr(1);

		$(document).on('click', '.open-search', function (event) {
			event.preventDefault();
			let _this = $(this);
			_this.toggleClass('active');
			// _this.siblings('.dropdown-search').toggleClass('active');
			$('.top-search').toggleClass('active');
			$('.top-search').slideToggle();

			return false;
		});

		$(document).on('click', '.main-menu>li>a', function (event) {
			if ($(this).attr('href') == '#') {
				return false;
			}
		});

		$(document).on('click', '.btn-close', function (event) {
			$(this).closest('header').find('.open-search').trigger('click');
		});

		/*body click*/
		$('body').click(function (e) {
			var target = $(e.target);
			if ((!target.is('.hd-menu-search') && $('.hd-menu-search').has(e.target).length === 0)) {
				if ($('.open-search').hasClass('active')) {
					$('.open-search').removeClass('active');
					e.preventDefault();
				}
				if ($('.top-search').hasClass('active')) {
					$('.top-search').removeClass('active');
					$('.top-search').slideUp();
					e.preventDefault();
				}
			}

		});

/* Source: cong-nghiep-lanh.html#script7 */
$()
		wow = new WOW(
			{
				boxClass: 'wow',      // default
				animateClass: 'animated', // default
				offset: 0,          // default
				mobile: true,       // default
				live: true,
				resetAnimation: true,
				scrollContainer: 'section'        // default
			}
		)

		var width = $(window).width();
		if (width >= 1220) {
			wow.init();
		}

		$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#backtop').addClass('active');
				// $('#backtop').stop().animate({ bottom: '30px' }, 0);
			} else {
				$('#backtop').removeClass('active');
				// $('#backtop').stop().animate({ bottom: '-60px' }, 0);
			}
		});
		$(document).ready(function () {
			$('#backtop').click(function (event) {
				event.preventDefault();
				$('html, body').animate({ scrollTop: 0 }, 500);
			});
		});

