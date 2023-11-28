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
