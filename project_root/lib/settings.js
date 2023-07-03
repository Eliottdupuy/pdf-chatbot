```javascript
import { supabaseClient } from './supabase';

export async function updateSettings(userId, settings) {
  try {
    const { data, error } = await supabaseClient
      .from('Settings')
      .upsert({ id: userId, ...settings });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error updating settings:', error);
    return null;
  }
}

export async function getSettings(userId) {
  try {
    const { data, error } = await supabaseClient
      .from('Settings')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error getting settings:', error);
    return null;
  }
}
```