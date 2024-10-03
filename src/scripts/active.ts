// Active navigation links
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
      ioHandler(entry);
    }
  });
}, config);

sections.forEach((section) => observer.observe(section));

const ioHandler = (entry: IntersectionObserverEntry) => {
  const id = entry.target.id;

  links.forEach((navlink) => {
    navlink.classList.remove("active");
    if (navlink.getAttribute("href") === `#${id}`) {
      navlink.classList.add("active");
    }
  });
};

// Active gallery images
const galleryImages = document.querySelectorAll(".about-gallery img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    image.classList.toggle("active");
  });

  (image as HTMLImageElement).addEventListener(
    "keydown",
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        image.classList.toggle("active");
      }
    },
  );
});
