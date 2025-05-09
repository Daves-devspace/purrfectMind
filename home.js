document.addEventListener("DOMContentLoaded", function () {
  // Chat Demo Functionality
  initChatDemo();

  // Testimonial Carousel
  initTestimonialCarousel();
});

// Chat Demo Functionality
function initChatDemo() {
  const sendButton = document.getElementById("send-button");
  const userInput = document.getElementById("user-message");
  const chatMessages = document.getElementById("chat-messages");

  if (sendButton && userInput && chatMessages) {
    // Bot responses for demo
    const botResponses = [
      "That's a good point. How does that make you feel?",
      "I understand. Can you tell me more about that?",
      "It sounds like you're going through a tough time. Would it help to talk about some coping strategies?",
      "I'm here for you. Remember to take things one step at a time.",
      "That's completely normal to feel that way. Many people experience similar emotions.",
      "Have you tried taking a few deep breaths? It can help center your thoughts.",
    ];

    // Handle send button click
    sendButton.addEventListener("click", function () {
      sendMessage();
    });

    // Handle enter key press
    userInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });

    function sendMessage() {
      const message = userInput.value.trim();

      if (message !== "") {
        // Add user message
        addMessage(message, "user");

        // Clear input
        userInput.value = "";

        // Simulate bot typing
        setTimeout(function () {
          // Get random response
          const randomResponse =
            botResponses[Math.floor(Math.random() * botResponses.length)];

          // Add bot message
          addMessage(randomResponse, "bot");

          // Scroll to bottom
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
      }
    }

    function addMessage(text, sender) {
      const messageDiv = document.createElement("div");
      messageDiv.className = `chat-message ${sender}`;

      const messagePara = document.createElement("p");
      messagePara.textContent = text;

      messageDiv.appendChild(messagePara);
      chatMessages.appendChild(messageDiv);

      // Scroll to bottom
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  }
}

// Testimonial Carousel
function initTestimonialCarousel() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  const prevBtn = document.getElementById("prev-slide");
  const nextBtn = document.getElementById("next-slide");

  if (slides.length > 0 && dots.length > 0 && prevBtn && nextBtn) {
    let currentSlide = 0;
    const slideCount = slides.length;

    // Set up autoplay
    let autoplayInterval = setInterval(nextSlide, 5000);

    // Previous slide button
    prevBtn.addEventListener("click", function () {
      clearInterval(autoplayInterval);
      currentSlide = (currentSlide - 1 + slideCount) % slideCount;
      updateSlides();
      autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Next slide button
    nextBtn.addEventListener("click", function () {
      clearInterval(autoplayInterval);
      nextSlide();
      autoplayInterval = setInterval(nextSlide, 5000);
    });

    // Dot navigation
    dots.forEach(function (dot, index) {
      dot.addEventListener("click", function () {
        clearInterval(autoplayInterval);
        currentSlide = index;
        updateSlides();
        autoplayInterval = setInterval(nextSlide, 5000);
      });
    });

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slideCount;
      updateSlides();
    }

    function updateSlides() {
      // Update slides
      slides.forEach(function (slide, index) {
        if (index === currentSlide) {
          slide.classList.add("active");
        } else {
          slide.classList.remove("active");
        }
      });

      // Update dots
      dots.forEach(function (dot, index) {
        if (index === currentSlide) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }
  }
}
