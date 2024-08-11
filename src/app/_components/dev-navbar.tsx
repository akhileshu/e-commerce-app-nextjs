"use client";

import { userRoles } from "@/types/shared";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingSpinner from "./loading-spinner";

type NavLink = {
  title: string;
  link: string;
};

function getUserNavLinks(isAuthenticated: boolean) {
  const commonLinks: NavLink[] = [{ title: "Hi User!", link: "/user" }];

  // Links available only to authenticated users
  const authenticatedLinks: NavLink[] = [
    { title: "Orders", link: "/user/orders" },
    { title: "Wishlist", link: "/user/wishlist" },
    { title: "Settings", link: "/user/settings" },
  ];

  // Links available only to unauthenticated users
  const unauthenticatedLinks: NavLink[] = [
    { title: "Login/Signup", link: "/user/auth" },
  ];

  return isAuthenticated
    ? [...commonLinks, ...authenticatedLinks]
    : [...commonLinks, ...unauthenticatedLinks];
}
function getSellerNavLinks(isAuthenticated: boolean) {
  const commonLinks: NavLink[] = [{ title: "Hi Seller!", link: "/seller" }];

  // Links available only to authenticated users
  const authenticatedLinks: NavLink[] = [
    { title: "List a Product", link: "/seller/products/list-product" },
    { title: "complete-profile", link: "/seller/profile/complete-profile" },
    { title: "My Products", link: "/seller/products/my-products" },
    {
      title: "Add Product Variants",
      link: "/seller/products/add-variants/0fdbd000-beac-4b67-9ddd-a06357b0f696",
    },
    { title: "Orders", link: "/seller/orders" },
  ];

  // Links available only to unauthenticated users
  const unauthenticatedLinks: NavLink[] = [
    { title: "Login/Signup", link: "/seller/auth" },
  ];

  return isAuthenticated
    ? [...commonLinks, ...authenticatedLinks]
    : [...commonLinks, ...unauthenticatedLinks];
}

const adminNavLinks: { title: string; link: string }[] = [
  { title: "Hi Admin!", link: "#" },
  { title: "Home", link: "/admin" },
  { title: "Products", link: "/admin/products" },
  { title: "Orders", link: "/admin/orders" },
];

function getLinks(
  pathname: string,
  role: typeof userRoles.seller | typeof userRoles.user | undefined
) {
  const isAuthenticatedSeller = role === "SELLER";
  const isAuthenticatedUser = role === "USER";
  if (pathname.startsWith("/user")) {
    if (isAuthenticatedSeller) signOut();
    return getUserNavLinks(isAuthenticatedUser);
  } else if (pathname.startsWith("/seller")) {
    if (isAuthenticatedUser) signOut();
    return getSellerNavLinks(isAuthenticatedSeller);
  } else if (pathname.startsWith("/admin")) return adminNavLinks;
  else return [];
}

function isValidSession(
  session: any
): session is { user: { name: string; role: "SELLER" | "USER" } } {
  return (
    session &&
    session.user &&
    (session.user.role === "SELLER" || session.user.role === "USER") &&
    typeof session.user.name === "string"
  );
}

function NoNavBarOnAuthPage(pathname: string, links: NavLink[]) {
  return pathname.includes("/auth") || !links.length;
}
export default function DevNavBar() {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const [links, setLinks] = useState(getLinks(pathname, session?.user.role));

  useEffect(() => {
    setLinks(getLinks(pathname, session?.user?.role));
  }, [pathname, session?.user?.role]);

  useEffect(() => {
    setIsLoading(status === "loading");
  }, [status]);

  if (isLoading) return <LoadingSpinner className="m-2" />;

  if (status === "loading") return <div>Loading...</div>;
  if (NoNavBarOnAuthPage(pathname, links)) return;
  const switchRoleTitle = pathname.startsWith("/user")
    ? "Seller"
    : pathname.startsWith("/seller")
    ? "User"
    : null;

  return (
    <div className="flex justify-between shadow-lg mb-2 mt-2 sticky top-0 z-10 bg-white">
      <div className="flex flex-wrap gap-3 m-2 text-blue-600 text-sm ">
        {isValidSession(session) ? (
          <AuthLinks name={session.user.name} role={session.user.role} />
        ) : null}
        {links.map((link, index) => {
          return (
            <LinkComponent key={index} title={link.title} link={link.link} />
          );
        })}
      </div>
      {switchRoleTitle ? (
        <div className="flex gap-3 m-2 text-blue-600 text-sm ">
          <LinkComponent
            title={`switch to ${switchRoleTitle}`}
            link={`/${switchRoleTitle.toLocaleLowerCase()}`}
          />
        </div>
      ) : null}
    </div>
  );
}

function AuthLinks({
  role,
  name,
}: {
  role: typeof userRoles.seller | typeof userRoles.user;
  name: string;
}) {
  return (
    <>
      <div className="hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded-sm border-[1px] border-solid border-blue-100">{`LoggedIn ${role.toLocaleLowerCase()}:${name}`}</div>
      <button
        className="hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded-sm border-[1px] border-solid border-blue-100"
        onClick={() => signOut()}
      >
        Logout
      </button>
    </>
  );
}

function LinkComponent({ title, link }: { title: string; link: string }) {
  return (
    <Link
      className="hover:bg-blue-100 hover:text-blue-700 px-2 py-1 rounded-sm border-[1px] border-solid border-blue-100"
      href={link}
    >
      {title}
    </Link>
  );
}
