$('.modal').on('hidden.bs.modal', function () {
	$(this).find('.modal-body iframe').each(function(){
	  var video = $(this).attr("src");
	  $(this).attr("src", "");
	  $(this).attr("src", video);
	});
});