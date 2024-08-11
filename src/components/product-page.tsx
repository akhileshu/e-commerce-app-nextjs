import React from "react";
import Lorem from "./lorem";
import Image from "next/image";

function ProductPage() {
  return (
    <div>
      <TopSectionRelatedCategories />
      <TwoAnsistorsAndCurrentCategoryStrip />
      <ImagesAndInfoSection />
<Lorem/>
<Lorem/>
<Lorem/>
<Lorem/>
    </div>
  );
}

function TopSectionRelatedCategories() {
  const d = [
    "Electronics",
    "Mobiles & Accessories",
    "Laptops & Accessories",
    "TV & Home Entertainment",
    "Audio",
    "Cameras",
    "Computer Peripherals",
    "Smart Technology",
    "Musical Instruments",
    "Office & Stationery",
  ];
  return (
    <div className=" border flex justify-evenly">
      {d.map((cat, index) => (
        <div key={index} className="text-xs">
          {cat}
        </div>
      ))}
    </div>
  );
}

function ImagesAndInfoSection() {
  const path = "/hero-section/image.png";
  const p = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex">
      <div className="flex-1 flex h-screen border sticky top-1">
        <div className="">
          {p.map((no, index) => {
            return (
              <div className="border" key={index}>
                {no}
              </div>
            );
          })}
        </div>
        <div className="relative w-full">
          <Image src={path} alt="" fill objectFit="cover" />
          <span className="absolute top-2 right-2 border bg-white ">{"<"}</span>
        </div>
      </div>
      <div className="flex-1 border">
        <div className="bg-amazon-light-gray h-60 border"></div>
        <div className="bg-amazon-light-gray h-60 border"></div>
        <div className="bg-amazon-light-gray h-60 border"></div>
        <div className="bg-amazon-light-gray h-60 border"></div>
      </div>
    </div>
  );
}

function TwoAnsistorsAndCurrentCategoryStrip() {
  const d = ["Electronics", "Mobiles & Accessories", "Laptops & Accessories"];
  const isLastCategory = (category: String) => {
    return d[d.length - 1] == category;
  };
  return (
    <div className="border flex gap-1">
      {d.map((cat, index) => {
        let s = `${cat} > `;
        if (isLastCategory(cat)) s = `${cat}`;
        return (
          <div key={index} className="text-xs">
            {s}
          </div>
        );
      })}
    </div>
  );
}

export default ProductPage;
