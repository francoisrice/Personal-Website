// function getDOMItems()
const menuBtn = document.querySelector('.menu-btn');
const btnLines = document.querySelectorAll('.btn-line');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(params) {
	if (!showMenu) {
		menuBtn.classList.add('close');
		btnLines.forEach((item) => item.classList.add('show'));
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		btnLines.forEach((item) => item.classList.remove('show'));
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		showMenu = false;
	}
}
