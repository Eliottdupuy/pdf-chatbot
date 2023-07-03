**Shared Dependencies:**

**Exported Variables:**
1. `supabaseClient`: Exported from `lib/supabase.js`, used in various files for database operations.
2. `signIn`, `signUp`, `signOut`: Exported from `lib/auth.js`, used in authentication related components.
3. `uploadDocument`, `retrieveDocument`: Exported from `lib/documents.js`, used in document related components.
4. `sendQuery`: Exported from `lib/chatbot.js`, used in `ChatWindow.js`.
5. `updateSettings`: Exported from `lib/settings.js`, used in `Settings.js`.

**Data Schemas:**
1. `User`: Used in `lib/auth.js` and `lib/settings.js`.
2. `Document`: Used in `lib/documents.js`.
3. `Settings`: Used in `lib/settings.js` and `Settings.js`.

**DOM Element IDs:**
1. `signInForm`, `signUpForm`: Used in `SignInForm.js` and `SignUpForm.js` respectively.
2. `documentUploader`: Used in `DocumentUploader.js`.
3. `documentViewer`: Used in `DocumentViewer.js`.
4. `chatWindow`: Used in `ChatWindow.js`.
5. `settingsForm`: Used in `Settings.js`.

**Message Names:**
1. `SIGN_IN_SUCCESS`, `SIGN_UP_SUCCESS`, `SIGN_OUT_SUCCESS`: Used in authentication related components.
2. `UPLOAD_SUCCESS`, `RETRIEVE_SUCCESS`: Used in document related components.
3. `QUERY_SUCCESS`: Used in `ChatWindow.js`.
4. `UPDATE_SUCCESS`: Used in `Settings.js`.

**Function Names:**
1. `handleSignIn`, `handleSignUp`, `handleSignOut`: Used in authentication related components.
2. `handleUpload`, `handleRetrieve`: Used in document related components.
3. `handleQuery`: Used in `ChatWindow.js`.
4. `handleUpdate`: Used in `Settings.js`.