"use server"
import { cookies } from "next/headers";

export const getUserRole = async () => {
  const cookieStore = cookies();
  return cookieStore.get("user-role")?.value ?? "";
};



