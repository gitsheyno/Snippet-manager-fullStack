"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";
export async function editSnippet(id: number, code: string) {
  await db.snipet.update({
    where: {
      id,
    },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snipet.delete({
    where: {
      id,
    },
  });

  redirect(`/`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  //   return { message: "Title Must be longer" };
  //-------------------------------<< Validate Inputs >>-------------------------------
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3) {
    return { message: "title must be longer" };
  }
  if (typeof code !== "string" || title.length < 10) {
    return { message: "code must be longer" };
  }
  //-------------------------------<< Create New Record in DB >>-------------------------------
  const snippet = await db.snipet.create({
    data: {
      title,
      code,
    },
  });
  console.log(snippet);

  //-------------------------------<< Redirect to Root >>-------------------------------

  redirect("/");
}
