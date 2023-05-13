window.matchMedia("(min-width: 601px)").addEventListener("change", function(event) {
	if (event.matches) {
	  	navItems.forEach((item) => {
	  		item.style.opacity = '1';
	  	});
  		navbarNav.classList.remove('hide');
	}
});