const DOM = (function () {
    const elements = {
        header: document.querySelector("header"),
        firstSection: document.querySelector(".home-intro")
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