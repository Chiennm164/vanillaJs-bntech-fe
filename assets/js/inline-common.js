/* ============================================================
   BKTECH Inline Common JS — Header, menu, scroll handlers
   - Cached DOM lookups
   - Throttled scroll via requestAnimationFrame
   - Event delegation pattern
   ============================================================ */

(function ($) {
	"use strict";

	$(document).ready(function () {
		// Cache DOM lookups (1 lần khi ready)
		const $pcHeader = $(".bnk-pc-header");
		const $backtop = $("#backtop");

		// Desktop header hover (chỉ home page có .ishome)
		$(document)
			.on("mouseenter", ".bnk-pc-header.ishome .main-menu li", function () {
				$(this).closest(".bnk-pc-header").addClass("hovering");
			})
			.on("mouseleave", ".bnk-pc-header.ishome .main-menu li", function () {
				$(this).closest(".bnk-pc-header").removeClass("hovering");
			});

		// Mobile menu toggle
		$(document).on("click", ".bnk-mobile-header .bnk-btn-open-categories", function (e) {
			e.preventDefault();
			const $this = $(this);
			$this.toggleClass("active");
			$this.closest(".bnk-dropdown-menu").find(".bnk-dropdown-box").toggleClass("active");
		});

		// Prevent navigation cho hash-only links
		$(document).on("click", ".bnk-main-menu>li>a", function () {
			if ($(this).attr("href") === "#") return false;
		});

		// Outside-click: close mobile menu
		$("body").on("click", function (e) {
			const $target = $(e.target);
			if (!$target.closest(".bnk-mobile-hd-categories").length) {
				$(".bnk-mobile-hd-categories .bnk-btn-open-categories.active").removeClass("active");
				$(".bnk-mobile-hd-categories .bnk-dropdown-box.active").removeClass("active");
			}
		});

		// Back-to-top
		$backtop.on("click", function (e) {
			e.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, 500);
		});

		// WOW.js animations (desktop only)
		if (typeof WOW !== "undefined" && $(window).width() >= 1220) {
			new WOW({
				boxClass: "bnk-anim",
				animateClass: "animated",
				offset: 0,
				mobile: true,
				live: true,
				resetAnimation: true
			}).init();
		}
	});

	// Sticky header + back-to-top visibility (throttled với rAF)
	$(window).on("load", function () {
		const $pcHeader = $(".bnk-pc-header");
		const $backtop = $("#backtop");
		const headerHeight = $pcHeader.outerHeight() || 0;

		let ticking = false;
		let lastScrollY = 0;
		let isHeaderFixed = false;
		let isBacktopActive = false;

		function onScroll() {
			lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
			if (!ticking) {
				window.requestAnimationFrame(updateOnScroll);
				ticking = true;
			}
		}

		function updateOnScroll() {
			const shouldFixHeader = lastScrollY >= headerHeight;
			const shouldActiveBacktop = lastScrollY > 50;

			// Chỉ toggle khi state thay đổi → tránh layout thrashing
			if (shouldFixHeader !== isHeaderFixed) {
				$pcHeader.toggleClass("fixed", shouldFixHeader);
				isHeaderFixed = shouldFixHeader;
			}
			if (shouldActiveBacktop !== isBacktopActive) {
				$backtop.toggleClass("active", shouldActiveBacktop);
				isBacktopActive = shouldActiveBacktop;
			}
			ticking = false;
		}

		window.addEventListener("scroll", onScroll, { passive: true });
		// Initial check
		onScroll();
	});
})(jQuery);
