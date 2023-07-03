```javascript
import { createClient } from '@openai/api';

const openai = createClient(process.env.OPENAI_API_KEY);

export async function getChatbotResponse(prompt) {
  try {
    const response = await openai.complete({
      engine: 'davinci-codex',
      prompt: prompt,
      maxTokens: 100,
      temperature: 0.5,
    });

    if (response && response.choices && response.choices.length > 0) {
      return response.choices[0].text.trim();
    } else {
      throw new Error('No response from chatbot');
    }
  } catch (error) {
    console.error('Error getting chatbot response:', error);
    throw error;
  }
}
```