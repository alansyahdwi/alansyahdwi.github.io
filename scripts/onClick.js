navbarToggler.addEventListener('click', () => {
	if (navbarNav.classList.contains('show')) {
	  	navItems.forEach((item) => {
	  		item.style.opacity = '0';
	  	});

	    navbarNav.classList.remove('show');
	    navbarNav.classList.add('hide');
	} else {
	    navbarNav.classList.remove('hide');
	    navbarNav.classList.add('show');
	}

	navbarToggler.classList.toggle('show');
});