document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");
  const sendAnotherBtn = document.getElementById("send-another");
  const submitButton = document.getElementById("submit-button");
  const toast = document.getElementById("toast");

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }

  // Form validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showError(input, message) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.add("error");
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = "block";
    }
    return false;
  }

  function clearError(input) {
    const errorElement = document.getElementById(`${input.id}-error`);
    input.classList.remove("error");
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.style.display = "none";
    }
  }

  function validateForm() {
    let isValid = true;
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    // Clear previous errors
    clearError(nameInput);
    clearError(emailInput);
    clearError(subjectInput);
    clearError(messageInput);

    // Validate name
    if (nameInput.value.trim().length < 2) {
      isValid = showError(nameInput, "Name is required");
    }

    // Validate email
    if (!emailInput.value.trim()) {
      isValid = showError(emailInput, "Email is required");
    } else if (!validateEmail(emailInput.value)) {
      isValid = showError(emailInput, "Please enter a valid email address");
    }

    // Validate subject
    if (subjectInput.value.trim().length < 3) {
      isValid = showError(subjectInput, "Subject is required");
    }

    // Validate message
    if (messageInput.value.trim().length < 10) {
      isValid = showError(
        messageInput,
        "Please enter a message with at least 10 characters"
      );
    }

    return isValid;
  }

  // Add input event listeners to clear errors when typing
  const formInputs = contactForm.querySelectorAll("input, textarea");
  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      clearError(this);
    });
  });

  // Form submission
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    if (validateForm()) {
      // Show sending state
      submitButton.textContent = "Sending...";
      submitButton.disabled = true;

      // Simulate form submission with setTimeout
      setTimeout(function () {
        // Hide the form and show success message
        contactForm.style.display = "none";
        successMessage.classList.remove("hidden");

        // Reset form
        contactForm.reset();
        submitButton.textContent = "Send Message";
        submitButton.disabled = false;

        // Show toast notification
        showToast("Message sent successfully!");
      }, 1500);
    } else {
      // Show error toast if form is invalid
      showToast("Please fill in all required fields correctly.", "error");
    }
  });

  // Send another message button
  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener("click", function () {
      successMessage.classList.add("hidden");
      contactForm.style.display = "flex";
    });
  }

  // Toast notification function
  function showToast(message, type = "success") {
    const toastContent = toast.querySelector(".toast-content");
    toastContent.textContent = message;

    // Set toast color based on type
    if (type === "error") {
      toast.style.backgroundColor = "#FEE2E2";
      toast.style.color = "#DC2626";
      toast.style.borderLeft = "4px solid #DC2626";
    } else {
      toast.style.backgroundColor = "#ECFDF5";
      toast.style.color = "#047857";
      toast.style.borderLeft = "4px solid #047857";
    }

    toast.classList.remove("hidden");
    toast.classList.add("show");

    // Hide toast after 4 seconds
    setTimeout(function () {
      toast.classList.remove("show");
      setTimeout(function () {
        toast.classList.add("hidden");
      }, 300);
    }, 4000);
  }
});
