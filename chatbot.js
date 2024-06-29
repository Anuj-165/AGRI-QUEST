// chatbot.js

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    displayMessage('user', userInput);

    // Get chatbot response
    const botResponse = getChatbotResponse(userInput);

    // Display chatbot response
    displayMessage('bot', botResponse);

    // Clear input field
    document.getElementById('chat-input').value = '';
}

// Function to display messages in the chat container
function displayMessage(sender, message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to generate chatbot responses
function getChatbotResponse(userMessage) {
    // Example responses based on farming expertise
    const responses = {
        'how do i control pests in my crops': 'There are several methods to control pests, including using organic pesticides, introducing beneficial insects, and practicing crop rotation.',
        'what is the best way to improve soil health': 'To improve soil health, consider adding organic matter, practicing crop rotation, and reducing tillage.',
        'how often should i water my plants': 'The watering frequency depends on the type of crop and soil. Generally, most crops need 1-2 inches of water per week.'
    };

    // Get response based on user message or a default one
    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't have an answer for that. Can you provide more details?";
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
// chatbot.js

// Function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('chat-input').value;
    if (userInput.trim() === '') return;

    // Display user message
    displayMessage('user', userInput);

    // Get chatbot response
    const botResponse = getChatbotResponse(userInput);

    // Display chatbot response
    displayMessage('bot', botResponse);

    // Clear input field
    document.getElementById('chat-input').value = '';
}

// Function to display messages in the chat container
function displayMessage(sender, message) {
    const messagesContainer = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.textContent = message;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to the bottom
}

// Function to generate chatbot responses
function getChatbotResponse(userMessage) {
    // Example responses based on farming expertise
    const responses = {
        'how do i control pests in my crops': 'There are several methods to control pests, including using organic pesticides, introducing beneficial insects, and practicing crop rotation.',
        'what is the best way to improve soil health': 'To improve soil health, consider adding organic matter, practicing crop rotation, and reducing tillage.',
        'how often should i water my plants': 'The watering frequency depends on the type of crop and soil. Generally, most crops need 1-2 inches of water per week.'
    };

    // Get response based on user message or a default one
    return responses[userMessage.toLowerCase()] || "I'm sorry, I don't have an answer for that. Can you provide more details?";
}

// Function to check if Enter key is pressed
function checkEnter(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}
// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/chat', (req, res) => {
    const userMessage = req.body.message;

    // Example static responses (replace with your logic or NLP integration)
    const responses = {
        'how do i control pests in my crops': 'There are several methods to control pests, including using organic pesticides, introducing beneficial insects, and practicing crop rotation.',
        'what is the best way to improve soil health': 'To improve soil health, consider adding organic matter, practicing crop rotation, and reducing tillage.',
        'how often should i water my plants': 'The watering frequency depends on the type of crop and soil. Generally, most crops need 1-2 inches of water per week.'
    };

    const response = responses[userMessage.toLowerCase()] || "I'm sorry, I don't have an answer for that. Can you provide more details?";
    res.send({ response });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
