import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="flex gap-2 bg-slate-300">
      <Link className="myborder rounded-md" href={"/seller"}>
        🏠
      </Link>
      <Link
        className="myborder rounded-md"
        href={"/seller/products/list-product"}
      >
        List a Product
      </Link>
      <Link
        className="myborder rounded-md"
        href={"/seller/products/my-products"}
      >
        My Products
      </Link>
    </div>
  );
}

export default Navbar;
