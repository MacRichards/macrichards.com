$("#paperBtn").click(function() {
	$(this).toggleClass('active');
	if ($("#reviewBtn").hasClass("active")) {
		$("#reviewBtn").toggleClass("active");
	}
	$("#review").toggleClass('hidden');
	if ($("#paper").hasClass("hidden")) {
		$.each(paper, function() {
			$(this).toggleClass('hidden');
		});
	}
});

$("#reviewBtn").click(function() {
	$(this).toggleClass('active');
	if ($("#paperBtn").hasClass("active")) {
		$("#paperBtn").toggleClass("active");
	}
	$.each(paper, function() {
		$(this).toggleClass('hidden');
	});
	if ($("#review").hasClass("hidden")) $("#review").toggleClass('hidden');
});