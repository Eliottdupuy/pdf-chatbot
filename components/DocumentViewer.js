```javascript
import { useEffect, useState } from 'react';
import { retrieveDocument } from '../lib/documents';
import styles from '../styles/DocumentViewer.module.css';

const DocumentViewer = ({ documentId }) => {
  const [documentContent, setDocumentContent] = useState('');

  useEffect(() => {
    const fetchDocument = async () => {
      const content = await retrieveDocument(documentId);
      setDocumentContent(content);
    };

    fetchDocument();
  }, [documentId]);

  return (
    <div id="documentViewer" className={styles.documentViewer}>
      <h2>Document Viewer</h2>
      <div className={styles.documentContent}>
        {documentContent}
      </div>
    </div>
  );
};

export default DocumentViewer;
```