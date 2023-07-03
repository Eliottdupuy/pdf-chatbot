```javascript
import { useState } from 'react';
import { useRouter } from 'next/router';
import { signupUser } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Signup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const form = event.target;
    const formData = new FormData(form);
    const email = formData.get('email');
    const password = formData.get('password');

    try {
      await signupUser(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Sign Up</h1>
        <form id="signupForm" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
          <label htmlFor="password">Password</label>
          <input id="password" name="password" type="password" required />
          <button type="submit" disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>
        </form>
        {error && <p role="alert">{error}</p>}
      </main>
      <Footer />
    </div>
  );
}
```