// Mobile Navbar Toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Filter Menu
const filterBtns = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const category = btn.getAttribute("data-category");
    menuCards.forEach(card => {
      if (category === "all" || card.getAttribute("data-category") === category) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Testimonials Carousel
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});
document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

// Auto carousel
setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 5000);

// Reservation Form
// Contact / Enquiry Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const messageText = document.getElementById("message").value.trim();
  const message = document.getElementById("form-message");

  if (!name || !email || !messageText) {
    message.textContent = "Please fill all required fields.";
    message.style.color = "red";
    return;
  }

  message.textContent = `Thank you, ${name}! We received your enquiry and will contact you soon.`;
  message.style.color = "green";

  this.reset();
});
