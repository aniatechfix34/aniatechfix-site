document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Ania TechFix!");

    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const service = document.getElementById("service").value;

        alert(`Thank you, ${name}! Your ${service} service request has been received. We'll contact you at ${email}.`);
    });

    function sendMessage() {
        const input = document.getElementById("chatInput").value;
        if (input) {
            const chatMessages = document.getElementById("chatMessages");
            chatMessages.innerHTML += `<p>You: ${input}</p>`;
            document.getElementById("chatInput").value = "";
        }
    }

    window.sendMessage = sendMessage;
});