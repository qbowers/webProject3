function mailform() {
	
	$('.hero-cover-down').css('animation', 'expanddownfull 0.5s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
	
	$('.mailform').css('animation', 'mailform 1s cubic-bezier(.19,1,.22,1) 0.5s 1 forwards');
}

function closeform() {
	$('.mailform').css('animation', 'closeform 1s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
	setTimeout(coverup, 500);
}
function coverup() {
	$('.hero-cover-down').css('animation', 'compressdownfull 0.5s cubic-bezier(.19,1,.22,1) 0s 1 forwards');
}