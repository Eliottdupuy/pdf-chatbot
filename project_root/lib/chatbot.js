```javascript
import { createClient } from '@openai/api';

const openai = createClient(process.env.OPENAI_API_KEY);

export async function sendQuery(query, documentText, settings) {
  try {
    const response = await openai.complete({
      engine: 'davinci-codex',
      prompt: `${documentText}\n\nUser: ${query}\nAI:`,
      max_tokens: settings.maxTokens || 60,
      temperature: settings.temperature || 0.5,
      top_p: settings.topP || 1,
    });

    if (response && response.choices && response.choices.length > 0) {
      return response.choices[0].text.trim();
    } else {
      throw new Error('No response from AI');
    }
  } catch (error) {
    console.error('Error in sendQuery:', error);
    throw error;
  }
}
```