```javascript
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';
import Navbar from '../components/Navbar';
import SignInForm from '../components/SignInForm';
import SignUpForm from '../components/SignUpForm';
import DocumentUploader from '../components/DocumentUploader';
import DocumentViewer from '../components/DocumentViewer';
import ChatWindow from '../components/ChatWindow';
import Settings from '../components/Settings';

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;
    if (error) return console.error(error);
    if (!user) router.push('/api/auth/login');
  }, [user, isLoading, error]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      {user && (
        <>
          <DocumentUploader />
          <DocumentViewer />
          <ChatWindow />
          <Settings />
        </>
      )}
      {!user && (
        <>
          <SignInForm />
          <SignUpForm />
        </>
      )}
    </div>
  );
}
```