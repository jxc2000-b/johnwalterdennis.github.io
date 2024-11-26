// Initialize EmailJS with your user ID
const emailjs = require('emailjs-com'); // Include Email.js
const fs = require('fs');              // Include the file system module

// Read secrets from the config file
const secrets = JSON.parse(fs.readFileSync('../secrets/config.json', 'utf8'));

// Extract variables
const { serviceID, templateID, userID } = secrets;


emailjs.init(userID);

document.getElementsByClassName("actions").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const formData = $this.serialize();

    emailjs.sendForm(serviceID, templateID, formData)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((error) => {
            alert("Failed to send email: " + error);
        });
});

