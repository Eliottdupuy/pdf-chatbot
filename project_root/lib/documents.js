```javascript
import { supabaseClient } from './supabase';

export async function uploadDocument(userId, document) {
  const { data, error } = await supabaseClient
    .from('documents')
    .insert([{ user_id: userId, document }]);

  if (error) {
    throw error;
  }

  return data;
}

export async function getDocument(documentId) {
  const { data, error } = await supabaseClient
    .from('documents')
    .select('*')
    .eq('id', documentId)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getUserDocuments(userId) {
  const { data, error } = await supabaseClient
    .from('documents')
    .select('*')
    .eq('user_id', userId);

  if (error) {
    throw error;
  }

  return data;
}
```