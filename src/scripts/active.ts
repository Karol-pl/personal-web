const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const config = {
  root: null,
  rootMargin: "-30px 0px -60%",
  threshold: 1,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      ioHandler(entry);
    }
  });
}, config);

sections.forEach((section) => observer.observe(section));

const ioHandler = (entry: IntersectionObserverEntry) => {
  const id = entry.target.id;

  navLinks.forEach((navlink) => {
    navlink.classList.remove("active");
    if (navlink.getAttribute("href") === `/#${id}`) {
      navlink.classList.add("active");
    }
  });
};
