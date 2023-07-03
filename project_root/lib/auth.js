```javascript
import { supabaseClient } from './supabase';

export let userSession = null;

export async function signupUser(email, password) {
  const { user, error } = await supabaseClient.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  userSession = user;
  return user;
}

export async function signinUser(email, password) {
  const { user, error } = await supabaseClient.auth.signIn({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  userSession = user;
  return user;
}

export async function signoutUser() {
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    throw error;
  }

  userSession = null;
}

export async function getSession() {
  userSession = supabaseClient.auth.session();
  return userSession;
}
```