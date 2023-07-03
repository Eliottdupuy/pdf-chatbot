import { supabaseClient } from '../../../lib/supabase';
import { uploadDocument } from '../../../lib/documents';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST' });
  }

  const { user } = await supabaseClient.auth.api.getUserByCookie(req);

  if (!user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { file } = req.body;

  if (!file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  try {
    const documentId = await uploadDocument(user.id, file);

    return res.status(200).json({ message: 'UPLOAD_SUCCESS', documentId });
  } catch (error) {
    return res.status(500).json({ error: 'Error uploading document', details: error.message });
  }
}