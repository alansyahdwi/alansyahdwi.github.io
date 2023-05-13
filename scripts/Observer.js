const aboutContent = document.querySelector('.about-content');
const projektContent = document.querySelector('.projekt-content');
const leftParagraph = document.querySelector('.left-paragraph');
const rightParagraph = document.querySelector('.right-paragraph');

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
    	if (entry.isIntersecting) {
      		aboutContent.classList.add('animate');
      		leftParagraph.classList.add('animate');
      		rightParagraph.classList.add('animate');
      		projektContent.classList.add('animate');
    	}
  	});
}, { threshold: 0.2 });

observer.observe(aboutContent);
observer.observe(projektContent);