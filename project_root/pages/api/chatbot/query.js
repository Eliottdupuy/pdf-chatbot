```javascript
import { sendQuery } from '../../../lib/chatbot';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ message: 'Query is required' });
  }

  try {
    const response = await sendQuery(query);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}
```