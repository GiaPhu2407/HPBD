document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const fullView = document.createElement("div");
  fullView.className = "full";
  document.body.appendChild(fullView);

  // Initialize gallery items
  const items = document.querySelectorAll(".gallery-item");
  items.forEach((item) => {
    // Get actual image dimensions and set appropriate grid row span
    const img = item.querySelector("img");
    img.addEventListener("load", () => {
      const rowSpan = Math.ceil(img.height / 10);
      item.style.gridRowEnd = `span ${rowSpan}`;
    });

    // Click handler for images
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      fullView.innerHTML = `<img src="${imgSrc}" alt="Full view">`;
      fullView.classList.add("active");
    });
  });

  // Close full view when clicking outside the image
  fullView.addEventListener("click", (e) => {
    if (e.target === fullView) {
      fullView.classList.remove("active");
    }
  });

  // Handle escape key to close full view
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && fullView.classList.contains("active")) {
      fullView.classList.remove("active");
    }
  });
});
