import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetDeleteForm from "@/components/SnippetDeleteForm";
type SnippetEditProps = {
  params: {
    snippetid: string;
  };
};

const SnippetEditPage = async (props: SnippetEditProps) => {
  //----------------------<< Fetching Snippet >>----------------------

  const id = parseInt(props.params.snippetid);

  const snippet = await db.snipet.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) notFound();
  return (
    <div>
      <SnippetDeleteForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
