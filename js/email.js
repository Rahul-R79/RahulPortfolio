(function() {
    emailjs.init("OZgEL2d2Pwvj4GpUx");
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (!this.checkValidity()){
        alert("⚠️ Please fill out all required fields.");
        return
    }
    emailjs.sendForm("service_edonsys", "template_3tbu07c", this)
      .then(() => {
        alert("✅ Message sent successfully!");
        this.reset();
      }, (err) => {
        console.error("EmailJS Error:", err);
        alert("❌ Failed to send message. Try again later.");
      });
  });