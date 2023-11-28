"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snipet.update({
    where: {
      id,
    },
    data: { code },
  });

  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snipet.delete({
    where: {
      id,
    },
  });

  revalidatePath("/");
  redirect(`/`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  //   return { message: "Title Must be longer" };
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    console.log(code);

    if (typeof title !== "string" || title.length < 3) {
      return { message: "title must be longer" };
    }
    if (typeof code !== "string" || code.length < 10) {
      return { message: "code must be longer" };
    }
    await db.snipet.create({
      data: {
        title,
        code,
      },
    });

    // throw new Error("Failed to save to database...!");
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return { message: "Something Went Wrong" };
    }
  }
  revalidatePath("/");
  redirect("/");
}
