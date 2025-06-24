document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    
    document.getElementById("confirmationMessage").innerText = `Thank you, ${name}! Your booking for ${date} at ${time} has been confirmed.`;
});