// contact.js
// Frontend-only submit (GitHub Pages compatible)

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const msg = document.getElementById("msg");

  if (!form) {
    console.error("contactForm not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();   // stop page reload

    msg.innerText = "Submitting...";
    msg.style.color = "black";

    setTimeout(function () {
      msg.innerText = "Form submitted successfully!";
      msg.style.color = "green";
      form.reset();
    }, 800);
  });

});

