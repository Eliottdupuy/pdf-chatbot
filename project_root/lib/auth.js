```javascript
import { supabaseClient } from './supabase';

export async function signIn(email, password) {
  const { user, error } = await supabaseClient.auth.signIn({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return user;
}

export async function signUp(email, password) {
  const { user, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return user;
}

export async function signOut() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw error;
  }

  return true;
}
```