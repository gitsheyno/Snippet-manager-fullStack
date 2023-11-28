"use client";
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
    </div>
  );
}
