// main.js
// Developed by DaylanDStoica

// addEventListener("sendMessage".click, function() {
document.getElementById("sendMessage").addEventListener("click", function() {
    const messageInput = document.getElementById("messageInput");
    const message = messageInput.value;
    if (message) {
        const messagesDiv = document.getElementById("messages");
        messagesDiv.innerHTML += `<div>${message}</div>`;
        messageInput.value = "";
        // console.log("Message sent:", message);
        document.getElementById('status').textContent = 'Message sent.';
    }
    document.getElementById('status').textContent = 'Message sent.';

});