var handling = document.documentElement || document.body;
var elem = document.querySelector(element); // element is a placeholder
var speed = 1000;

function runScroll() {
	scrollTo(handling, elem.offsetTop, speed);
}

function scrollTo(element, to, duration) {

	if (duration <= 0) return;

	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function () {

		element.scrollTop = element.scrollTop + perTick;

		if (element.scrollTop == to) return;

		scrollTo(element, to, duration - 10);

	}, 10);

}

/* Additional Methods

var scrollme;

scrollme = document.querySelector('#top');
scrollme.addEventListener('click', runScroll, false);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

		document.getElementById('top').style.display = 'block';

	} else {

		document.getElementById('top').style.display = 'none';

	}

}

*/