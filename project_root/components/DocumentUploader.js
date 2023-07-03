```javascript
import { useState } from 'react';
import { uploadDocument } from '../lib/documents';
import styles from '../styles/DocumentUploader.module.css';

const DocumentUploader = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const response = await uploadDocument(file);
      if (response.error) {
        alert('Upload failed');
      } else {
        alert('Upload successful');
      }
    } catch (error) {
      alert('Upload failed');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={styles.uploader}>
      <input type="file" id="documentUploader" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
};

export default DocumentUploader;
```