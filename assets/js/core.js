(function ($) {
	"use strict";

	var HT = {};
	var $niceSelect = $(".nice-select");
	var $owl = $(".owl-slide .owl-carousel");

	// Kiểm tra element tồn tại
	$.fn.elExists = function () {
		return this.length > 0;
	};

	// Khởi tạo nice-select dropdown
	HT.niceInit = function () {
		if (!$niceSelect.elExists()) return;

		$niceSelect.niceSelect();

		$(document).on("mouseenter", ".nice-select .mCSB_scrollTools", function () {
			$(this).parents(".nice-select").addClass("open_scroll");
		});

		$(document).on("click.nice_select", function (event) {
			if ($(event.target).closest(".nice-select").length === 0) {
				$(".nice-select").removeClass("open_scroll");
				setTimeout(function () {
					$(".nice-select").removeClass("open");
				}, 50);
			}
		});

		$(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function () {
			$(".nice-select").removeClass("open_scroll open");
			setTimeout(function () {
				$(".nice-select").removeClass("open");
			}, 50);
		});
	};

	// Khởi tạo Owl Carousel cho element có data-option (base64 JSON)
	HT.owl = function () {
		$owl.each(function () {
			var _this = $(this);
			var encoded = _this.attr("data-option");
			if (!encoded) return;
			try {
				var opts = JSON.parse(atob(encoded));
				_this.owlCarousel(opts);
			} catch (e) {}
		});
	};

	$(document).ready(function () {
		HT.niceInit();
		HT.owl();
	});
})(jQuery);
