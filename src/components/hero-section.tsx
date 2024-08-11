"use client";
import { useNavBarHeight } from "@/hooks/useNavBarHeight";
import Image from "next/image";
import Footer from "./footer";
import YourBrowsingHistory from "./your-browsing-history";

function HeroSection() {
  const path = "/hero-section/image.png";
  const navHeight = useNavBarHeight();
  return (
    <div
      style={{ height: `calc(100vh - ${navHeight}px)` }}
      className=" bg-black text-black  relative"
    >
      <Image src={path} alt="alt" fill />
      <span className="absolute text-3xl left-10 top-28">{"<"}</span>
      <span className="absolute text-3xl right-10 top-28">{">"}</span>
      <BelowHeroSection />
      <Footer />
    </div>
  );
}

function BelowHeroSection() {
  //todo:fix : place components below grid , getting placed below heroImage
  return (
    <div className=" bg-white absolute mx-3 top-1/2 min-w-full">
      <Grid />
      <Footer />
      <YourBrowsingHistory />
    </div>
  );
}

function Grid() {
  return (
    <div className="grid grid-cols-4 gap-4 min-h-screen">
      <div className="row-span-3 border border-blue-500 border-2">1</div>
      <div className="row-span-3 border border-blue-500 border-2">2</div>
      <div className="row-span-3 border border-blue-500 border-2">3</div>
      <div className="row-span-1 border border-blue-500 border-2">4</div>
      <div className="row-span-2 border border-blue-500 border-2">5</div>
      <div className="row-span-3 col-span-2 border border-blue-500 border-2">
        6
      </div>
      <div className="row-span-3 border border-blue-500 border-2">7</div>
      <div className="row-span-3 border border-blue-500 border-2">8</div>
    </div>
  );
}

export default HeroSection;
