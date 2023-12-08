// Add this in your home.js or create a new JavaScript file
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("heroSection");
  const welcomeText = document.getElementById("welcomeText");

  // Array of image URLs for the hero background
  const imageUrls = [
    "/images/hero-image1.jpg",
    "/images/hero-image2.jpg",
    "/images/hero-image3.jpg",
  ];

  let currentImageIndex = 0;

  // Function to change the background image
  function changeBackgroundImage() {
    heroSection.style.backgroundImage = `url('${imageUrls[currentImageIndex]}')`;
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  }

  // Change image every 5 seconds (adjust the time interval as needed)
  setInterval(changeBackgroundImage, 5000);

  // Initial background image
  changeBackgroundImage();
});
