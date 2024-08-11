"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export function AuthButton() {
  const { data: session } = useSession();
  return (
    <div className="myborder w-fit rounded-md">
      {session ? (
        <>
          {session?.user?.name} <br />
          {session?.user?.role} <br />
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn()}>login</button>
      )}
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <UpperNav />
      <LowerNav />
    </nav>
  );
}

const logoPath = "/brand-assets/amazon.png";
const upperNavDoubleItems = [
  {
    top: "Delivering to Mumbai 400001",
    bottom: "Update location",
    navigateTo: "",
  },

  {
    top: "Hello,sign in",
    bottom: "Account & Lists",
    navigateTo: "",
  },
  { top: "Returns", bottom: "& Orders", navigateTo: "" },
];

const lowerNavItems = [
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
  { title: "Account", navigateTo: "Account" },
];

function CartLink() {
  return (
    <div className="my-1 hover:ring-1 p-2 ring-white font-bold">( 1 )Cart</div>
  );
}

function SearchBar() {
  const placeholder = "Search Amazon.in";
  return (
    <div className="flex text-black">
      <span className="bg-amazon-light-gray p-3 rounded-l-sm border-solid border-black border-r-[1px]">
        All -
      </span>
      <input
        className="py-3 pl-1 min-w-80"
        placeholder={placeholder}
        type="text"
        name=""
        id=""
      />
      <span className="bg-amazon-orange p-3 rounded-r-sm">Q</span>
    </div>
  );
}

function UpperNav() {
  return (
    <div className="flex items-center justify-around bg-black text-xs text-white">
      <Image
        src={logoPath}
        className=" my-1 hover:ring-1 ring-white"
        alt="amazon"
        width={120}
        height={40}
      />
      {upperNavDoubleItems.map((item, index) => {
        return (
          <UpperNavDoubleItem key={index} top={item.top} bottom={item.bottom} />
        );
      })}
      <SearchBar />
      <CartLink />
    </div>
  );
}

function LowerNav() {
  return (
    <div className="bg-amazon-steel-blue text-white flex px-2">
      {lowerNavItems.map((item, index) => {
        return (
          <LowerNavItem
            key={index}
            title={item.title}
            navigateTo={item.navigateTo}
          />
        );
      })}
    </div>
  );
}

function UpperNavSingleItem() {
  return <div className="font-bold">upperNavItem</div>;
}
function UpperNavDoubleItem({ top, bottom }: { top: String; bottom: String }) {
  return (
    <div className="my-1 hover:ring-1 p-2 ring-white">
      <div className="">{top}</div>
      <div className="font-bold">{bottom}</div>
    </div>
  );
}
function LowerNavItem({
  title,
  navigateTo,
}: {
  title: String;
  navigateTo: any;
}) {
  return (
    <div className=" my-1 hover:ring-1 py-1 px-2 text-sm ring-white ">
      <Link href={navigateTo}>{title}</Link>
    </div>
  );
}

export default Navbar;
