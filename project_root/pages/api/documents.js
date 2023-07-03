```javascript
import { supabaseClient } from '../../lib/supabase.js';

export default async function handler(req, res) {
  const { user } = await supabaseClient.auth.api.getUserByCookie(req);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { data, error } = await supabaseClient
      .from('documents')
      .insert([{ user_id: user.id, content: req.body.content }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  if (req.method === 'GET') {
    const { data, error } = await supabaseClient
      .from('documents')
      .select('*')
      .eq('user_id', user.id);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json(data);
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
```