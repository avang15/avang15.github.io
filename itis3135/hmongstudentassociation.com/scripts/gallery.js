// scripts/gallery.js
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector(".gallery");
  const images = gallery.querySelectorAll("img");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  const caption = document.getElementById("galleryCaption");

  let currentIndex = 0;

  function updateGallery() {
    images.forEach((img, index) => {
      img.classList.toggle("active", index === currentIndex);
    });
    caption.textContent = images[currentIndex].alt;
  }

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  });

  // Optional: auto-slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
  }, 5000);
});
