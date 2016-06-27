$(window).on('beforeunload', function(){
	$(window).scrollTop(0);
});
function scrollbar() {
  var docHeight = $(document).height();
  var scroll    = $(window).height() + $(window).scrollTop();
  return (docHeight == scroll);
}
function document_height() {
	$('body').css({
        'height': $(document).height()
    });
};
function window_height() {
	$('body').css({
        'height': $(window).height()
    });
};
$(document).ready(function () {
    window_height();
});
var zoom = document.documentElement.clientWidth / window.innerWidth;
$(window).resize(function() {
    var zoomNew = document.documentElement.clientWidth / window.innerWidth;
    if (zoom != zoomNew) {
		window_height();
        zoom = zoomNew
    }
	if (!scrollbar()) {
		document_height();
	}
	var screenCssPixelRatio = (window.outerWidth - 8) / window.innerWidth;
	if (screenCssPixelRatio <= 1.32) {
		document_height();
	}
});
