// Image/Testimonial Slider
let testimonials = [
  '"This chatbot made me feel understood!" – Jane',
  '"Very comforting experience!" – Alex',
  '"Quick, simple, and caring responses." – Mia',
];

let currentIndex = 0;
const slider = document.getElementById("testimonialSlider");

if (slider) {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    slider.innerHTML = `<p>${testimonials[currentIndex]}</p>`;
  }, 3000);
}

// Form Validation
const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const feedback = document.getElementById("formMessage");

    if (!name || !email || !message) {
      feedback.textContent = "Please fill in all fields.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Message sent successfully!";
      feedback.style.color = "green";
      form.reset();
    }
  });
}
