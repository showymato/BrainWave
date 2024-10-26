import React, { useState, useEffect } from 'react';

// Function to create a chat session
async function createChatSession(apiKey, externalUserId) {
    const response = await fetch('https://api.on-demand.io/chat/v1/sessions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': apiKey
        },
        body: JSON.stringify({
            pluginIds: [],
            externalUserId: externalUserId
        })
    });

    const data = await response.json();
    return data.data.id; // Extract session ID
}

// Function to submit a query using the session ID
async function submitQuery(apiKey, sessionId, query) {
    const response = await fetch(`https://api.on-demand.io/chat/v1/sessions/${sessionId}/query`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apikey': apiKey
        },
        body: JSON.stringify({
            endpointId: 'predefined-openai-gpt4o',
            query: query,
            pluginIds: ['plugin-1712327325', 'plugin-1713962163', 'plugin-1729869509'],
            responseMode: 'sync'
        })
    });

    const data = await response.json();
    return data.data.message;
}

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const apiKey = 'KSVkt6stfcSh4BnhLwAxTyhBRsfda94z'; // API Key
    const externalUserId = 'your-unique-user-id'; // Replace with the actual user ID
    const [sessionId, setSessionId] = useState(null);

    // Create a new chat session when the component mounts
    useEffect(() => {
        async function initializeSession() {
            const id = await createChatSession(apiKey, externalUserId);
            setSessionId(id); // Store session ID
        }
        initializeSession();
    }, []);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        // Update chat history with the user's message
        setChatHistory((prev) => [...prev, { type: 'user', message: inputValue }]);

        // Check for specific dummy response to "hello"
        if (inputValue.toLowerCase() === "hello") {
            setTimeout(() => {
                setChatHistory((prev) => [...prev, { type: 'bot', message: "How may I help you today?" }]);
            }, 400);
        } else {
            // Send the query to the API and update chat history with the response
            const botResponse = await submitQuery(apiKey, sessionId, inputValue);
            setChatHistory((prev) => [...prev, { type: 'bot', message: botResponse }]);
        }

        setInputValue('');
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h4>Chat with us!</h4>
                        <button className="close-button" onClick={toggleChatbot}>X</button>
                    </div>
                    <div className="chatbot-body">
                        {/* Chat history display */}
                        {chatHistory.map((chat, index) => (
                            <div
                                key={index}
                                className={`chat-message ${chat.type === 'user' ? 'user-message' : 'bot-message'}`}
                            >
                                {chat.message}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-footer">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type a message..."
                            className="chatbot-input"
                        />
                        <button onClick={handleSendMessage} className="send-button">Send</button>
                    </div>
                </div>
            )}
            <button className="chatbot-toggle" onClick={toggleChatbot}>
                <img src="/chat-icon.png" alt="Chat" />
            </button>
        </div>
    );
};

export default Chatbot;
