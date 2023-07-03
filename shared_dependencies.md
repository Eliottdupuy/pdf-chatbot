**Shared Dependencies:**

1. **Exported Variables:**
   - `supabaseClient`: Exported from `lib/supabase.js` and used in various files for database operations.
   - `userSession`: Exported from `lib/auth.js` and used in various files for user authentication and session management.

2. **Data Schemas:**
   - `User`: Used in `lib/auth.js`, `pages/signup.js`, `pages/signin.js`, and `pages/dashboard.js`.
   - `Document`: Used in `lib/documents.js`, `pages/api/documents.js`, `pages/document.js`, and `components/DocumentViewer.js`.

3. **DOM Element IDs:**
   - `signupForm`: Used in `pages/signup.js`.
   - `signinForm`: Used in `pages/signin.js`.
   - `documentUploader`: Used in `components/DocumentUploader.js`.
   - `documentViewer`: Used in `components/DocumentViewer.js`.
   - `chatbot`: Used in `components/Chatbot.js`.

4. **Message Names:**
   - `SIGNUP_SUCCESS`: Used in `pages/signup.js`.
   - `SIGNIN_SUCCESS`: Used in `pages/signin.js`.
   - `UPLOAD_SUCCESS`: Used in `components/DocumentUploader.js`.
   - `CHATBOT_RESPONSE`: Used in `components/Chatbot.js`.

5. **Function Names:**
   - `initSupabase`: Defined in `lib/supabase.js` and used in `pages/_app.js`.
   - `signupUser`: Defined in `lib/auth.js` and used in `pages/signup.js`.
   - `signinUser`: Defined in `lib/auth.js` and used in `pages/signin.js`.
   - `uploadDocument`: Defined in `lib/documents.js` and used in `components/DocumentUploader.js`.
   - `getDocument`: Defined in `lib/documents.js` and used in `pages/document.js` and `components/DocumentViewer.js`.
   - `getChatbotResponse`: Defined in `lib/chatbot.js` and used in `components/Chatbot.js`.