// function getDOMItems()
const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
const btnLines = document.querySelectorAll('.btn-line');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Menu initial state
// Menu() -> .setShow(false)
let showMenu = false;

// function openNav() {
// 	if (!showMenu) {
// 		document.querySelector('.menu-nav').style.width = '250px';
// 		document.querySelector('.menu-nav').classList.add('open');
// 	} else {
// 		document.getElementById('mySidenav').style.width = '0px';
// 	}
// 	// document.getElementById('mySidenav').style.width = '250px';
// }

// /* Set the width of the side navigation to 0 */
// function closeNav() {
// 	document.getElementById('mySidenav').style.width = '0';
// }

// function toggleNav() {
// 	// const menuNav = document.getElementById('mySidenav');
// 	if ((document.getElementById('mySideNav').style.width = '0px')) {
// 		document.getElementById('mySideNav').style.width = '250px';
// 		// documentgetElementById('mySideNav').classList.remove('open');
// 	} else {
// 		document.getElementById('mySideNav').style.width = '0px';
// 		// documentgetElementById('mySideNav').classList.add('open');
// 	}
// }

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(params) {
	if (!showMenu) {
		menuBtn.classList.add('close');
		// menu.classList.add('show');
		btnLines.forEach((item) => item.classList.add('show'));
		menuNav.classList.add('show');
		menuBranding.classList.add('show');
		navItems.forEach((item) => item.classList.add('show'));

		// Set Menu State
		// Menu.setShow(true)
		showMenu = true;
	} else {
		menuBtn.classList.remove('close');
		// menu.classList.remove('show');
		btnLines.forEach((item) => item.classList.remove('show'));
		menuNav.classList.remove('show');
		menuBranding.classList.remove('show');
		navItems.forEach((item) => item.classList.remove('show'));

		// Set Menu State
		// Menu.setShow(true)
		showMenu = false;
	}
}
