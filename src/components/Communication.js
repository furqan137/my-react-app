// src/components/Communication.js
import React, { useState, useRef, useEffect } from 'react';
import './Communication.css';

function Communication() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== '') {
      setMessages([...messages, { id: Date.now(), text: message }]);
      setMessage('');
    }
  };

  return (
    <div className="communication">
      <h2 className="title">Communication with Customers</h2>
      <div className="messages-container">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
          required
          className="message-input"
        ></textarea>
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default Communication;
