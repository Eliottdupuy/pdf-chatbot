```javascript
import { supabaseClient } from './supabase';

export async function uploadDocument(file, user) {
  const { data, error } = await supabaseClient
    .storage
    .from('documents')
    .upload(`${user.id}/${file.name}`, file);

  if (error) {
    throw error;
  }

  return data;
}

export async function retrieveDocument(filePath) {
  const { data, error } = await supabaseClient
    .storage
    .from('documents')
    .download(filePath);

  if (error) {
    throw error;
  }

  return data;
}
```