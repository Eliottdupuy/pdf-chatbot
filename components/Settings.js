```javascript
import { useState } from 'react';
import { updateSettings } from '../lib/settings';
import styles from '../styles/Settings.module.css';

export default function Settings() {
    const [detailLevel, setDetailLevel] = useState('');
    const [languageType, setLanguageType] = useState('');

    const handleUpdate = async (event) => {
        event.preventDefault();
        const result = await updateSettings({ detailLevel, languageType });
        if (result) {
            alert('Settings updated successfully');
        } else {
            alert('Failed to update settings');
        }
    };

    return (
        <div className={styles.container}>
            <form id="settingsForm" onSubmit={handleUpdate}>
                <label htmlFor="detailLevel">Detail Level:</label>
                <select id="detailLevel" value={detailLevel} onChange={(e) => setDetailLevel(e.target.value)}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label htmlFor="languageType">Language Type:</label>
                <select id="languageType" value={languageType} onChange={(e) => setLanguageType(e.target.value)}>
                    <option value="formal">Formal</option>
                    <option value="informal">Informal</option>
                    <option value="technical">Technical</option>
                    <option value="non-technical">Non-Technical</option>
                </select>

                <button type="submit">Update Settings</button>
            </form>
        </div>
    );
}
```