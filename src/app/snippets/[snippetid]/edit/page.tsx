import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/SnippetEditForm";
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
      <SnippetEditForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditPage;
