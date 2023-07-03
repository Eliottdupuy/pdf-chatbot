```javascript
import { supabaseClient } from "../../lib/supabase";

export default async function handler(req, res) {
  const { user } = req.session;
  const { documentId } = req.body;

  if (!user || !documentId) {
    return res.status(400).json({ error: "Missing user or document ID" });
  }

  try {
    const { data, error } = await supabaseClient
      .from("documents")
      .select("content")
      .eq("id", documentId)
      .eq("user_id", user.id)
      .single();

    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ error: "Document not found" });
    }

    return res.status(200).json({ content: data.content });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
```