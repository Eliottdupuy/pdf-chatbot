```javascript
import { useState } from 'react';
import { signIn } from '../lib/auth';
import styles from '../styles/SignInForm.module.css';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form id="signInForm" className={styles.form} onSubmit={handleSignIn}>
      <h2>Sign In</h2>
      {error && <p className={styles.error}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign In</button>
    </form>
  );
}
```