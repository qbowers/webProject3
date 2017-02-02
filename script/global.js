(function($) {
  $.fn.visible = function(partial) {
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };
})(jQuery);



$(window).scroll(function(event) {
  $(".scroll-fade-in").each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
		el.css('animation', 'imagefadein 0.5s cubic-bezier(.19,1,.22,1) 0.2s 1 forwards')
    } 
  });
});



var footeropen = false
$('#clickey').click(function() {
	if (!footeropen) {
		console.log('stuff happens');
		$('#footer').css('animation', 'footeropen 1s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
		
		$('#clickey').css('animation', 'clickeyround 1s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
		
		
		footeropen = true;
	} else {
		$('#footer').css('animation', 'footerclose 1s cubic-bezier(.22,1,.19,1) 0s 1 forwards');
		
		$('#clickey').css('animation', 'clickeysquare 1s cubic-bezier(.22,1,.19,1) 0s 1 forwards');
		
		footeropen = false;
	}
});