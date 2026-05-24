/* ============================================================
   BKTECH Core JS — Plugin initializers
   - HT.niceInit: nice-select dropdown
   - HT.owl: Owl Carousel với base64 config
   ============================================================ */

(function ($) {
	"use strict";

	const HT = {};
	const NICE_SELECTOR = ".bnk-nice-select";
	const OWL_SELECTOR = ".owl-slide .owl-carousel";

	// Element exists helper
	$.fn.elExists = function () {
		return this.length > 0;
	};

	// Nice-select dropdown init
	HT.niceInit = function () {
		const $nice = $(NICE_SELECTOR);
		if (!$nice.elExists()) return;

		$nice.niceSelect();

		// Mở scroll khi hover scrollbar
		$(document).on("mouseenter", NICE_SELECTOR + " .mCSB_scrollTools", function () {
			$(this).parents(NICE_SELECTOR).addClass("open_scroll");
		});

		// Đóng khi click bên ngoài (namespace để dễ unbind nếu cần)
		$(document).on("click.nice_select", function (event) {
			if ($(event.target).closest(NICE_SELECTOR).length === 0) {
				$(NICE_SELECTOR).removeClass("open_scroll");
				setTimeout(function () {
					$(NICE_SELECTOR).removeClass("open");
				}, 50);
			}
		});

		// Đóng khi chọn option
		$(document).on("click.nice_select", NICE_SELECTOR + " .option:not(.disabled)", function () {
			$(NICE_SELECTOR).removeClass("open_scroll open");
			setTimeout(function () {
				$(NICE_SELECTOR).removeClass("open");
			}, 50);
		});
	};

	// Owl Carousel init từ data-option (base64 JSON)
	HT.owl = function () {
		$(OWL_SELECTOR).each(function () {
			const $el = $(this);
			const encoded = $el.attr("data-option");
			if (!encoded) return;
			try {
				const opts = JSON.parse(atob(encoded));
				$el.owlCarousel(opts);
			} catch (e) {
				// Silent fail — config xấu không break trang
			}
		});
	};

	$(document).ready(function () {
		HT.niceInit();
		HT.owl();
	});

	// Expose HT globally nếu cần debug
	window.HT = HT;
})(jQuery);
