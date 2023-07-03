**Shared Dependencies:**

1. **Exported Variables:**
   - `supabaseClient`: Exported from `supabaseClient.js` and used in various files for database operations.
   - `openaiClient`: Exported from `openaiClient.js` and used in `chatbot/query.js` for AI operations.
   - `pdfParser`: Exported from `pdfParser.js` and used in `documents/upload.js` and `documents/parse.js` for document processing.

2. **Data Schemas:**
   - `User`: Used in `auth/[...nextauth].js`, `settings/update.js`, and potentially in other files for user-related operations.
   - `Document`: Used in `documents/upload.js`, `documents/parse.js`, and potentially in other files for document-related operations.
   - `Settings`: Used in `settings/update.js` and potentially in other files for settings-related operations.

3. **DOM Element IDs:**
   - `signInForm`: Used in `SignIn.js` and potentially in other files.
   - `signUpForm`: Used in `SignUp.js` and potentially in other files.
   - `documentUploader`: Used in `DocumentUploader.js` and potentially in other files.
   - `documentViewer`: Used in `DocumentViewer.js` and potentially in other files.
   - `chatWindow`: Used in `ChatWindow.js` and potentially in other files.
   - `settingsForm`: Used in `Settings.js` and potentially in other files.

4. **Message Names:**
   - `SIGN_IN_SUCCESS`: Used in `auth/[...nextauth].js` and potentially in other files.
   - `SIGN_UP_SUCCESS`: Used in `auth/[...nextauth].js` and potentially in other files.
   - `DOCUMENT_UPLOAD_SUCCESS`: Used in `documents/upload.js` and potentially in other files.
   - `DOCUMENT_PARSE_SUCCESS`: Used in `documents/parse.js` and potentially in other files.
   - `CHATBOT_QUERY_SUCCESS`: Used in `chatbot/query.js` and potentially in other files.
   - `SETTINGS_UPDATE_SUCCESS`: Used in `settings/update.js` and potentially in other files.

5. **Function Names:**
   - `signIn`: Used in `SignIn.js` and potentially in other files.
   - `signUp`: Used in `SignUp.js` and potentially in other files.
   - `uploadDocument`: Used in `DocumentUploader.js` and potentially in other files.
   - `parseDocument`: Used in `DocumentViewer.js` and potentially in other files.
   - `queryChatbot`: Used in `ChatWindow.js` and potentially in other files.
   - `updateSettings`: Used in `Settings.js` and potentially in other files.