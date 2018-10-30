let form = document.getElementById('form');
let trigger = document.getElementById('trigger');
let lineLeft = document.getElementById('lineLeft');
let lineRight = document.getElementById('lineRight');

function move() {
	form.classList.toggle('contact-form__active');
	lineLeft.classList.toggle('trigger-link_line__left__active');
	lineRight.classList.toggle('trigger-link_line__right__active');
}

trigger.addEventListener('click', move);