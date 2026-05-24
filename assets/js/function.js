// Escape HTML để chống XSS khi insert text vào DOM
function escapeHtml(unsafe) {
	if (unsafe == null) return "";
	return String(unsafe)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

// Khởi tạo owl carousel cho project popup
function owlCarousel_r() {
	$(".post-slide .owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: { items: 1, nav: true, dots: false },
			600: { items: 1, nav: false, dots: false },
			1000: { items: 1, nav: true, dots: false, loop: false }
		}
	});
}

// Build HTML cho slide hình ảnh dự án (escape URL)
function project_slide(listSlide) {
	if (!Array.isArray(listSlide) || listSlide.length === 0) return "";
	var html = '<div class="owl-carousel">';
	for (var i = 0; i < listSlide.length; i++) {
		html +=
			'<div class="thumb-post"><span class="img-cover">' +
			'<img src="' + escapeHtml(listSlide[i]) + '" alt="Hình ảnh dự án">' +
			"</span></div>";
	}
	html += "</div>";
	return html;
}

// Build HTML cho tiêu đề + mô tả (escape title; description từ server có thể chứa HTML hợp lệ)
function project_text(title, description) {
	return (
		'<h3 class="title">' + escapeHtml(title) + "</h3>" +
		'<div class="desc">' + escapeHtml(description) + "</div>"
	);
}

$(document).ready(function () {
	// Click trigger popup chi tiết dự án
	$(document).on("click", 'a[href="#project-popup"]', function () {
		var id = $(this).attr("data-id");
		var formURL = "article/ajax/article/project.html";

		$.post(formURL, { id: id }, function (data) {
			try {
				var response = JSON.parse(data);
				var album = response.object.album ? JSON.parse(response.object.album) : [];
				$(".post-slide").html(project_slide(album));
				$(".post-text").html(project_text(response.object.title, response.object.description));
				owlCarousel_r();
			} catch (e) {
				$(".post-slide").empty();
				$(".post-text").text("Không thể tải dữ liệu dự án");
			}
		});
		return false;
	});

	// Cleanup khi đóng popup
	$("#project-popup").on("hide.uk.modal", function () {
		$(".post-slide").empty();
		$(".post-text").empty();
	});
});
