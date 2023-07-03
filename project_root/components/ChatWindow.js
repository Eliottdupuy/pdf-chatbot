```javascript
import { useState } from 'react';
import { sendQuery } from '../lib/chatbot';
import styles from '../styles/ChatWindow.module.css';

export default function ChatWindow() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');

    const handleQuery = async (e) => {
        e.preventDefault();
        const res = await sendQuery(query);
        setResponse(res);
    };

    return (
        <div id="chatWindow" className={styles.chatWindow}>
            <div className={styles.chatHistory}>
                <p>{response}</p>
            </div>
            <form onSubmit={handleQuery}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.queryInput}
                />
                <button type="submit" className={styles.queryButton}>
                    Send
                </button>
            </form>
        </div>
    );
}
```