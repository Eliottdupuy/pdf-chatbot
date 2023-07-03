```javascript
import { useState } from 'react';
import { signUp } from '../lib/auth';
import styles from '../styles/SignUpForm.module.css';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
      window.location.href = '/';
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form id="signUpForm" className={styles.form} onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
```