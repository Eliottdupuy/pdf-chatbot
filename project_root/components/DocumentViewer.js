```javascript
import { useEffect, useState } from 'react';
import { getDocument } from '../lib/documents';
import styles from '../styles/DocumentViewer.module.css';

const DocumentViewer = ({ documentId }) => {
  const [document, setDocument] = useState(null);

  useEffect(() => {
    const fetchDocument = async () => {
      const doc = await getDocument(documentId);
      setDocument(doc);
    };

    fetchDocument();
  }, [documentId]);

  if (!document) {
    return <div>Loading...</div>;
  }

  return (
    <div id="documentViewer" className={styles.container}>
      <h2 className={styles.title}>{document.title}</h2>
      <p className={styles.content}>{document.content}</p>
    </div>
  );
};

export default DocumentViewer;
```