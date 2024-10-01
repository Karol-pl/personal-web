const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("[data-after]");

const config = {
  root: null,
  rootMargin: "-30px 0px -40%",
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log(`#${entry.target.id} is intersecting`);
      ioHandler(entry);
    }
  });
}, config);

console.log(observer);

sections.forEach((section) => observer.observe(section));

const ioHandler = (entry: IntersectionObserverEntry) => {
  const id = entry.target.id;
  console.log("entry id", id);

  links.forEach((navlink) => {
    navlink.classList.remove("active");
    if (navlink.getAttribute("href") === `#${id}`) {
      navlink.classList.add("active");
    }
  });
};
