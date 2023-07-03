```javascript
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signinUser } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signinUser(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Sign In</h1>
        <form id="signinForm" onSubmit={handleSignIn}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        {error && <p>{error}</p>}
      </main>
      <Footer />
    </div>
  );
}
```