function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();
    
    if (message === "") return;
    
    let chatBox = document.getElementById("chatBox");
    
    // Add user message
    let userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.innerText = message;
    chatBox.appendChild(userMessage);