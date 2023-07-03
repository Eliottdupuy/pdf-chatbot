```javascript
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { userSession } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DocumentUploader from '../components/DocumentUploader';
import DocumentViewer from '../components/DocumentViewer';
import Chatbot from '../components/Chatbot';
import Settings from '../components/Settings';

export default function Home() {
  const router = useRouter();
  const { user } = userSession();

  useEffect(() => {
    if (!user) {
      router.push('/signin');
    }
  }, [user, router]);

  return (
    <div>
      <Header />
      <main>
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