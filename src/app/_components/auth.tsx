"use client";
import { userRoles } from "@/types/shared";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import LoadingSpinner from "./loading-spinner";

function Auth({
  role,
}: {
  role: typeof userRoles.seller | typeof userRoles.user;
}) {
  //note: userRouter vs redirect , need to understand more , because here in this cc , its redirect working insted of userRouter
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticatedSeller = session?.user.role === "SELLER";
  const isAuthenticatedUser = session?.user.role === "USER";
  if (isAuthenticatedSeller) redirect(`/seller/profile/complete-profile`);
  if (isAuthenticatedUser) redirect(`/user`);
  useEffect(() => {
    setIsLoading(status === "loading");
  }, [status]);

  const imgSrc = role === "SELLER" ? "/seller/login.png" : "/user/login.png";
  if (isLoading)
    return (
      <LoadingSpinner className="h-screen" />
    );
  return (
    <div className="flex items-center h-screen">
      <div className="relative flex-1 h-full">
        <Image src={imgSrc} alt="seller-login" fill objectFit="cover" />
      </div>
      <div className="flex-1 gap-3 flex-col  flex items-center m-6 justify-center rounded-sm">
        <Link href={`/${role.toLocaleLowerCase()}`}>
          <Image
            src={"/brand-assets/amazon.png"}
            width={100}
            height={200}
            alt="amazon"
          />
        </Link>
        <AuthTabs role={role} />
      </div>
    </div>
  );
}

export default Auth;

export function AuthTabs({
  role,
}: {
  role: typeof userRoles.seller | typeof userRoles.user;
}) {
  return (
    <Tabs defaultValue="login" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <AuthTabsContent role={role} type="Login" />
      </TabsContent>
      <TabsContent value="signup">
        <AuthTabsContent role={role} type="Signup" />
      </TabsContent>
    </Tabs>
  );
}

type AuthTabsContentProps = {
  type: "Login" | "Signup";
  role: typeof userRoles.seller | typeof userRoles.user;
};

function AuthTabsContent({ type, role }: AuthTabsContentProps) {
  function handleGoogleLogin() {
    document.cookie = `user-role=${role}; path=/;`;
    signIn("google");
  }
  function handleGoogleSignup() {
    document.cookie = `user-role=${role}; path=/;`;
    signIn("google");
  }
  const title = getTitle(type, role);

  const GoogleAuthButtonTitle =
    type === "Login" ? "Login With Google" : "Register With Google";
  const googleAuthButtonAction =
    type === "Login" ? () => handleGoogleLogin() : () => handleGoogleSignup();
  return (
    <div className="flex gap-4 py-4 items-center flex-col border-solid border-purple-200 border-2 rounded-sm p-2">
      <p className="text-lg">{title}</p>
      <button
        onClick={googleAuthButtonAction}
        className="border-2 items-center flex gap-2 border-solid border-purple-600 m-2 p-2 rounded-sm"
      >
        <FcGoogle size={"2rem"} />
        {GoogleAuthButtonTitle}
      </button>
    </div>
  );
}

function getTitle(type: "Login" | "Signup", role: "USER" | "SELLER"): string {
  if (role === "SELLER") {
    return type === "Login"
      ? "Already a Registered Seller!, Login"
      : "Get Registered as an Amazon Seller";
  } else {
    return type === "Login" ? "Welcome Back, Login" : "Join Us as a User";
  }
}
