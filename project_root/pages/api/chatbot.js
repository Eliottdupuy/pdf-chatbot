```javascript
import { getChatbotResponse } from '../../lib/chatbot';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { documentContent, userQuery } = req.body;

  if (!documentContent || !userQuery) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const response = await getChatbotResponse(documentContent, userQuery);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'Error processing request', error: error.message });
  }
}
```