"use client";

import { editSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import type { Snipet } from "@prisma/client";

type SnippetEditFormProp = {
  snippet: Snipet;
};
export default function SnippetEditForm({ snippet }: SnippetEditFormProp) {
  const [value, setValue] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setValue(value);
  };

  const bindFormatData = editSnippet.bind(null, snippet.id, value);

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={bindFormatData}>
        <button type="submit" className="p-2 border rounded">
          Save
        </button>
      </form>
    </div>
  );
}
