"use server";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import {
  UnauthenticatedError,
  UnauthorizedError,
} from "@/error-handling/custom-error-classes";
import { wrapTryCatch } from "@/error-handling/wrap-with-try-catch";
import { userRoles } from "@/types/shared";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getSessionByRole = wrapTryCatch(
  async (role: typeof userRoles.seller | typeof userRoles.user) => {
    const session = await getServerSession(authOptions);
    if (!session) throw new UnauthenticatedError();
    if (session?.user.role !== role) throw new UnauthorizedError();
    return session;
  }
);
// export const getSessionSeller = wrapWithTryCatch(async () => {
//   const session = await getServerSession(authOptions);
//   if (!session) throw new UnauthenticatedError();
//   if (session?.user.role !== userRoles.seller) throw new UnauthorizedError();
//   return session;
// });

export async function isAuthenticatedSeller() {
  debugger;
  const session = await getServerSession(authOptions);
  const isAuthenticated = session?.user.role === userRoles.seller;
  return isAuthenticated;
}

export async function redirectToSellerLoginIfNotAuthenticated() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = session?.user.role === userRoles.seller;
  if (!isAuthenticated) {
    redirect("/seller/auth");
  }
  return session;
}
export async function redirectToSellerHomeIfAuthenticated() {
  const session = await getServerSession(authOptions);
  const isAuthenticated = session?.user.role === userRoles.seller;
  if (isAuthenticated) {
    redirect("/seller/authenticated");
  }
}
