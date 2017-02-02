var i = 0;

function expandThumbs() {
	$('.customthumb').eq(i).css('animation', 'thumbexpand 1s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
	
	i++;
	if($('.customthumb').eq(i) != null) setTimeout(expandThumbs, 150);
}

setTimeout(expandThumbs, 400);