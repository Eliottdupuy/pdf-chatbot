```javascript
import { signOut } from '../lib/auth';
import styles from '../styles/Navbar.module.css';

export default function Navbar({ user }) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>AI Document Interaction</h1>
      </div>
      <div className={styles.links}>
        {user ? (
          <>
            <p>Welcome, {user.email}</p>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) : (
          <>
            <a href="/signin">Sign In</a>
            <a href="/signup">Sign Up</a>
          </>
        )}
      </div>
    </nav>
  );
}
```