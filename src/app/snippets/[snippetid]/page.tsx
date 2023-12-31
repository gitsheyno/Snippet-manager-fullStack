import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
type SnippetPageParam = {
  params: {
    snippetid: string;
  };
};

export default async function SnippetPage(params: SnippetPageParam) {
  //----------------------<< Fetching Data >>----------------------
  const snippet = await db.snipet.findFirst({
    where: { id: parseInt(params.params.snippetid) },
  });

  //----------------------<< not data found >>----------------------
  if (!snippet) notFound();
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1
          className="text-xl fon
        "
        >
          {snippet.title}
        </h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="p-2 border rounded"
          >
            Edit
          </Link>
          <button className="p-2 border rounded">
            <Link href={`/snippets/${snippet.id}/delete`}>Delete</Link>
          </button>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}
export async function generateStaticParams() {
  const snippets = await db.snipet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id,
    };
  });
}
