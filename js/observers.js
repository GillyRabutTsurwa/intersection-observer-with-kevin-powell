const firstSection = document.querySelector(".section-1");
const mySections = document.querySelectorAll("section");
// Name could be anything.
// takes a callback (a function) and options parametres
const options = {
	// this is the default and implicitly applied, thus not necessary
	root: null,
	// NOTE: Threshold also 0 by default. 0 means that it will detect the section if even the slightest bit of it is on the page. If we change it to 1, the section will only be detected if its entirety is on the viewport. Also, 0.25 for a quarter, 0.5 for half of it and so on and so forth.
	threshold: 0,
	// will detect the change on the viewport - 150px. also needs px or % values
	rootMargin: "-150px"
};
// create the observer
// takes two parametres, a callback function and the options we're going to provide
const observer = new IntersectionObserver(function(entries, observer) {
	// the callback function will call on the entries, and the observer itself;
	// two important properties are target - the element that's entering or leaving the screen and isIntersecting, if the currentElement is on the screen
	entries.forEach((currentEntry) => {
		if (currentEntry.isIntersecting) {
			console.log(currentEntry.target);
			currentEntry.target.classList.add("bolden");
			// observer.unobserve(currentEntry.target);
		}
		else {
			currentEntry.target.classList.remove("bolden");
		}

		// Here's how kevin did the exact same thing...
		// if (!currentEntry.isIntersecting) {
		//     return;
		// }
		// currentEntry.target.classList.toggle("bolden");
		// that being said I saw some behavioural differences with toggle vs add/remove. I'll have to play with it a bit more
	});
}, options);
// How to use the observer for one section. will comment out
// observer.observe(firstSection);

// How to use the observer for multiple questions (propbably what we will do more often)
mySections.forEach((currentSection) => {
	observer.observe(currentSection);
});
