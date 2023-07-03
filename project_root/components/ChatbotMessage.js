```javascript
import React from 'react';
import styles from '../styles/ChatbotMessage.module.css';

const ChatbotMessage = ({ message, isUser }) => {
  return (
    <div className={isUser ? styles.userMessage : styles.botMessage}>
      <p>{message}</p>
    </div>
  );
};

export default ChatbotMessage;
```