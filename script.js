
(function() {
    emailjs.init("dwzPAAouKpSkiznZs");
})();

document.getElementById("contactForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.send("service_gvu8y4l", "template_jwn5d3r", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    })
    .then(function() {
        document.getElementById("contactForm").reset();
        alert("Message sent successfully!");
    }, function() {
        alert("Failed to send message.");
    });
});

