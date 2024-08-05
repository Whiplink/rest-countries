"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function setDarkTheme() {
  const cookieStore = cookies()
  const isDarkTheme = cookieStore.get('darkTheme')
  cookies().set("darkTheme", isDarkTheme?.value === "true" ? "false" : "true");
  revalidatePath("/");
}