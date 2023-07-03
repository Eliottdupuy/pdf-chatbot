```javascript
import { useState } from 'react';
import { supabaseClient } from '../lib/supabase';
import styles from '../styles/Settings.module.css';

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSettingsUpdate = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    const { data, error } = await supabaseClient
      .from('settings')
      .update({
        chatbot_response_speed: event.target.chatbotResponseSpeed.value,
        chatbot_response_style: event.target.chatbotResponseStyle.value,
      })
      .match({ user_id: supabaseClient.auth.user().id });

    if (error) {
      setMessage('Error updating settings.');
    } else if (data) {
      setMessage('Settings updated successfully.');
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSettingsUpdate}>
        <label htmlFor="chatbotResponseSpeed">Chatbot Response Speed:</label>
        <input
          type="number"
          id="chatbotResponseSpeed"
          name="chatbotResponseSpeed"
          min="1"
          max="5"
          required
        />

        <label htmlFor="chatbotResponseStyle">Chatbot Response Style:</label>
        <select id="chatbotResponseStyle" name="chatbotResponseStyle" required>
          <option value="friendly">Friendly</option>
          <option value="professional">Professional</option>
          <option value="casual">Casual</option>
        </select>

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Update Settings'}
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
```