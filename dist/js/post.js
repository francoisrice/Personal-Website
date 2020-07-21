window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop < 1) {
		document.querySelector('.navbar').style.top = '0';
		document.querySelector('.post').style.marginTop = '7%';
		document.querySelector('.menu-btn').style.visibility = 'hidden';
	} else {
		document.querySelector('.navbar').style.top = '-7%';
		document.querySelector('.post').style.marginTop = '3%';
		document.querySelector('.menu-btn').style.visibility = 'visible';
	}
}
