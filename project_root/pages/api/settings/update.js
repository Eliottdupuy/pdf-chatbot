```javascript
import { supabaseClient } from "../../lib/supabase";

export default async function handler(req, res) {
  const { user, settings } = req.body;

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { data, error } = await supabaseClient
      .from('Settings')
      .update(settings)
      .match({ user_id: user.id });

    if (error) throw error;

    return res.status(200).json({ message: 'UPDATE_SUCCESS', data });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred', error: error.message });
  }
}
```