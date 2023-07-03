```javascript
import { useState } from 'react';
import { getChatbotResponse } from '../lib/chatbot';
import ChatbotMessage from './ChatbotMessage';
import styles from '../styles/Chatbot.module.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleUserMessage = async (event) => {
    event.preventDefault();
    const userMessage = event.target.userMessage.value;
    setMessages([...messages, { type: 'user', text: userMessage }]);
    const chatbotResponse = await getChatbotResponse(userMessage);
    setMessages([...messages, { type: 'user', text: userMessage }, { type: 'chatbot', text: chatbotResponse }]);
  };

  return (
    <div id="chatbot" className={styles.chatbot}>
      <div className={styles.messages}>
        {messages.map((message, index) => (
          <ChatbotMessage key={index} type={message.type} text={message.text} />
        ))}
      </div>
      <form onSubmit={handleUserMessage}>
        <input type="text" name="userMessage" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
```