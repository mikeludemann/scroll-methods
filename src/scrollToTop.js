var elem = document.body || document.documentElement;
var speed = 1000;

function runScroll() {
	scrollTo(elem, 0, speed);
}

/* Additional methods

var scrollme;

scrollme = document.querySelector('#top');
scrollme.addEventListener('click', runScroll, false);

*/

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
