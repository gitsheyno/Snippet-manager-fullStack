import { db } from "@/db";

export default async function Home() {
  //---------------------<< Fetching Data >>---------------------

  const snippets = await db.snipet.findMany(); //All the records Array of objects
  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}> {snippet.title}</div>;
  });
  return <main>{renderedSnippets}</main>;
}
