"use server";

import { revalidatePath } from "next/cache";

export async function revalidateHome(id : string) {
  revalidatePath(`/library/${id}`);
}