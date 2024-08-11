import Image from "next/image";
import React from "react";

function BrowsingHistroyPage() {
  return (
    <div className="m-4">
      <Top />
      <Products />
    </div>
  );
}
function Products() {
  const products = [];
  return (
    <div className="flex flex-wrap divide-y divide-solid divide-x ">
      {Array.from({ length: 16 }, (_, index) => (
        <ProductCard key={index} />
      ))}
    </div>
  );
}
function ProductCard() {
  return (
    <div className=" px-4 py-6 w-40">
      <Image
        src={"/products/image.png"}
        width={150}
        height={200}
        alt="product"
      />
      <div className="text-sm">
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit.</p>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="flex justify-between">
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div>( O )</div>
    </div>
  );
}
export default BrowsingHistroyPage;
