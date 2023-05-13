navbarNav.addEventListener('animationend', () => {
  	navItems.forEach((item) => {
  		if (navbarNav.classList.contains('show')) {
  			item.style.opacity = '1';
  		}
  	});
});