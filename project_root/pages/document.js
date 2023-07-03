```javascript
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getDocument } from '../lib/documents';
import DocumentViewer from '../components/DocumentViewer';
import Chatbot from '../components/Chatbot';

export default function DocumentPage() {
  const router = useRouter();
  const { id } = router.query;
  const [document, setDocument] = useState(null);

  useEffect(() => {
    if (id) {
      getDocument(id).then(setDocument);
    }
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DocumentViewer document={document} />
      <Chatbot document={document} />
    </div>
  );
}
```