/* ============================================================
   BKTECH Function JS — Project popup modal handler
   - Click .href="#project-popup" → hiển thị thông tin dự án
   - Không gọi AJAX (static site, không có backend)
   - Dùng data-title + title attribute từ trigger
   ============================================================ */

(function ($) {
	"use strict";

	// Escape HTML chống XSS
	function escapeHtml(str) {
		if (str == null) return "";
		return String(str)
			.replace(/&/g, "&amp;")
			.replace(/</g, "&lt;")
			.replace(/>/g, "&gt;")
			.replace(/"/g, "&quot;")
			.replace(/'/g, "&#039;");
	}

	$(document).ready(function () {
		const $slide = $(".bnk-post-slide");
		const $text = $(".bnk-post-text");

		// Click trigger → hiển thị thông tin từ data-* + title
		$(document).on("click", 'a[href="#project-popup"]', function () {
			const $trigger = $(this);
			const title = $trigger.attr("title") || $trigger.attr("data-title") || "Dự án BKTECH";

			// Tìm ảnh gần trigger (cùng card)
			const $card = $trigger.closest(".bnk-prd_item, .bnk-project-item, li, .uk-grid > div");
			const $img = $card.find("img").first();
			const imgSrc = $img.attr("src") || "upload/images/bnk-logo-bnk.jpg";
			const imgAlt = $img.attr("alt") || title;

			// Build content trực tiếp (không AJAX)
			const slideHtml =
				'<div class="thumb-post"><span class="img-cover">' +
				'<img src="' + escapeHtml(imgSrc) + '" alt="' + escapeHtml(imgAlt) + '">' +
				"</span></div>";

			const textHtml =
				'<h3 class="title">' + escapeHtml(title) + "</h3>" +
				'<div class="desc"><p>Thông tin chi tiết dự án sẽ được cập nhật sớm. ' +
				'Liên hệ Hotline <a href="tel:0983842889"><strong>0983 842 889</strong></a> ' +
				"để biết thêm chi tiết.</p></div>";

			$slide.html(slideHtml);
			$text.html(textHtml);

			return false;
		});

		// Cleanup khi đóng popup
		$("#project-popup").on("hide.uk.modal", function () {
			$slide.empty();
			$text.empty();
		});
	});
})(jQuery);
