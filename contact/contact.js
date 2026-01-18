// contact.js
// Exam-safe demo submit (No backend required)

document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const msg = document.getElementById("msg");

  if (!form) {
    console.error("contactForm not found");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();   // Page reload stop

    // Show submitting message
    msg.innerText = "Submitting...";

    // Fake delay for demo (looks professional)
    setTimeout(function () {
      msg.innerText = "Form submitted successfully! (Demo)";
      msg.style.color = "green";
      form.reset();
    }, 1000);
  });

});
