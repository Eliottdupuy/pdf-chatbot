```javascript
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userSession } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocumentUploader from '../components/DocumentUploader';
import DocumentViewer from '../components/DocumentViewer';
import Chatbot from '../components/Chatbot';
import Settings from '../components/Settings';

export default function Dashboard() {
  const router = useRouter();
  const [session, setSession] = useState(null);

  useEffect(() => {
    const currentSession = userSession();
    if (!currentSession) {
      router.push('/signin');
    } else {
      setSession(currentSession);
    }
  }, [router]);

  if (!session) {
    return null;
  }

  return (
    <div>
      <Header />
      <main>
        <h1>Welcome, {session.user.email}</h1>
        <DocumentUploader />
        <DocumentViewer />
        <Chatbot />
        <Settings />
      </main>
      <Footer />
    </div>
  );
}
```