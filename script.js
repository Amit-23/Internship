document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".carousel-control-prev");
  const nextButton = document.querySelector(".carousel-control-next");
  const carouselInner = document.querySelector(".carousel-inner");
  const items = document.querySelectorAll(".carousel-item");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const navItems = document.querySelector(".items");

  let currentIndex = 0;

  function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  prevButton.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1;
    }
    updateCarousel();
  });

  nextButton.addEventListener("click", function () {
    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  
  setInterval(() => {
    nextButton.click();
  }, 5000);

  
  hamburgerMenu.addEventListener("click", function () {
    navItems.classList.toggle("active");
  });

  
  const newArrivalsButton = document.getElementById("new-arrivals");
  const salesButton = document.getElementById("sales");
  const hotSellingButton = document.getElementById("hot-selling");

  const newArrivalsContainer = document.getElementById(
    "new-arrivals-container"
  );
  const salesContainer = document.getElementById("sales-container");
  const hotSellingContainer = document.getElementById("hot-selling-container");

  function showContainer(container) {
    newArrivalsContainer.classList.remove("active");
    salesContainer.classList.remove("active");
    hotSellingContainer.classList.remove("active");

    container.classList.add("active");
  }

  newArrivalsButton.addEventListener("click", () =>
    showContainer(newArrivalsContainer)
  );
  salesButton.addEventListener("click", () => showContainer(salesContainer));
  hotSellingButton.addEventListener("click", () =>
    showContainer(hotSellingContainer)
  );
});
