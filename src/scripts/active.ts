// Active gallery images
const galleryImages = document.querySelectorAll(".gallery img");

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
