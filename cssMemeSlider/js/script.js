'use strict'

const sliderPics = document.querySelectorAll('.slider__pic');
const sliderText = document.querySelectorAll('.text-item');
const sliderDots = document.querySelectorAll('.slider-dot');

let index = 0;

function currentSlide(n) {
	for (let pic of sliderPics) {
		pic.classList.remove('active-pic');
	}
	sliderPics[n].classList.add('active-pic');
}
function currentDot(n) {
	for (let dot of sliderDots) {
		dot.classList.remove('active-dot');
	}
	sliderDots[n].classList.add('active-dot');
}
function currentText(n) {
	for (let text of sliderText) {
		text.classList.remove('active-text');
	}
	sliderText[n].classList.add('active-text');
}

function activeSlide(n) {
	currentSlide(n);
	currentDot(n);
	currentText(n);
}
sliderDots.forEach(function (dot, indexDot) {
	dot.addEventListener('click', function (e) {
		currentSlide(indexDot);
		currentDot(indexDot);
		currentText(indexDot);
	})
})