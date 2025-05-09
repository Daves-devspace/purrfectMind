document.addEventListener("DOMContentLoaded", function () {
  // Initialize animations for elements when they come into view
  initAnimations();
});

// Initialize fade-in animations for elements when they come into view
function initAnimations() {
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  if (animatedElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    animatedElements.forEach((element) => {
      observer.observe(element);
    });
  }
}
