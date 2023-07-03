```javascript
import React from 'react';
import Link from 'next/link';
import { userSession } from '../lib/auth';
import styles from '../styles/Header.module.css';

const Header = () => {
  const { user, signOut } = userSession();

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>AI Document Interaction</a>
      </Link>
      <nav>
        {user ? (
          <>
            <Link href="/dashboard">
              <a className={styles.link}>Dashboard</a>
            </Link>
            <button onClick={signOut} className={styles.link}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/signup">
              <a className={styles.link}>Sign Up</a>
            </Link>
            <Link href="/signin">
              <a className={styles.link}>Sign In</a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
```