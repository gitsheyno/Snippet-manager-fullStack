"use client";

import { deleteSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import type { Snipet } from "@prisma/client";

type SnippetEditFormProp = {
  snippet: Snipet;
};
export default function SnippetDeleteForm({ snippet }: SnippetEditFormProp) {
  const bindFormatData = deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
      <form action={bindFormatData}>
        <button type="submit" className="p-2 border rounded">
          Delete
        </button>
      </form>
    </div>
  );
}
