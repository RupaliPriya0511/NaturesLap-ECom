document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function updateCarousel() {
        items.forEach((item, i) => {
            const newIndex = (index + i) % items.length;
            item.style.transform = `translateX(-50%) translateY(-50%) translateZ(${newIndex === 0 ? 150 : newIndex < 3 ? 0 : -100}px) rotateY(${newIndex === 1 ? -15 : newIndex === 2 ? 15 : newIndex === 3 ? -20 : 20}deg)`;
            item.style.opacity = newIndex === 0 ? "1" : newIndex < 3 ? "0.7" : "0.5";
        });
        index = (index + 1) % items.length;
    }

    setInterval(updateCarousel, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const images = document.querySelectorAll(".slider-image");

    function showNextImage() {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add("active");
    }

    images[currentIndex].classList.add("active");
    setInterval(showNextImage, 100); 
});




