const DOM = (function () {
    const elements = {
        header: document.querySelector("header"),
        firstSection: document.querySelector(".home-intro"),
        faders: document.querySelectorAll(".fade-in"), //NEW
        sliders: document.querySelectorAll(".slide-in")
    }
    return elements;
})();

const optionsFirstSection = {
    rootMargin: "-125px 0px 0px 0px"
};

const observerFirstSection = new IntersectionObserver(function (entries, observerFirstSection) {
    entries.forEach((currentEntry) => {
        // console.log(currentEntry.target);
        if (currentEntry.isIntersecting) {
            DOM.header.classList.remove("nav-scrolled");
        } else {
            DOM.header.classList.add("nav-scrolled");
        }
    });
}, optionsFirstSection);

observerFirstSection.observe(DOM.firstSection);

// NEW:
const optionsAppear = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach((currentEntry) => {
        // console.log(currentEntry);
        if (currentEntry.isIntersecting) {
            currentEntry.target.classList.add("appear");
            appearOnScroll.unobserve(currentEntry.target); // to stop observing once observed
        }
    })
}, optionsAppear);

// Souvenez-vous comment créer un observeur pour beaucoup d'éléments?
DOM.faders.forEach((currentElement) => {
    appearOnScroll.observe(currentElement);
});

DOM.sliders.forEach((currentElement) => {
    appearOnScroll.observe(currentElement);
});