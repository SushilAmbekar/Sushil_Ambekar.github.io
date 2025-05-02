
document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.querySelector(".scroll-to-top");
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
});
document.getElementById('swipe-btn').addEventListener('click', function() {
  document.getElementById('more-testimonials').style.display = 'flex';
  document.getElementById('swipe-btn').style.display = 'none';
});
