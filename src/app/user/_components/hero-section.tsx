"use client";
import { useNavBarHeight } from "@/hooks/useNavBarHeight";
import Image from "next/image";
import Footer from "../../../components/footer";
import YourBrowsingHistory from "../../../components/your-browsing-history";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselComponent } from "@/app/user/_components/carousel";

function HeroSection() {
  const path = "/hero-section/image.png";
  const navHeight = useNavBarHeight() || 100;
  return (
    <div className={`h-[calc(100vh-${navHeight}px)]  relative -mt-2`}>
      <CarouselComponent
        className={`h-[calc(100vh-${navHeight}px)]  relative`}
      />
      <BelowHeroSection />
    </div>
  );
}

function BelowHeroSection() {
  return (
    <div className="space-y-2  absolute mx-3 min-w-[calc(100%-1.5rem)] top-1/2">
      <Grid />
      <YourBrowsingHistory />
      <Footer />
    </div>
  );
}

function Grid() {
  return (
    <div className="grid  grid-cols-4 gap-4 min-h-screen">
      <div className="row-span-3 bg-white border border-blue-500 border-2">
        1
      </div>
      <div className="row-span-3 bg-white border border-blue-500 border-2">
        2
      </div>
      <div className="row-span-3 bg-white border border-blue-500 border-2">
        3
      </div>
      <div className="row-span-1 bg-white border border-blue-500 border-2">
        4
      </div>
      <div className="row-span-2 bg-white border border-blue-500 border-2">
        5
      </div>
      <div className="row-span-3 bg-white col-span-2 border border-blue-500 border-2">
        6
      </div>
      <div className="row-span-3 border border-blue-500 border-2">7</div>
      <div className="row-span-3 border border-blue-500 border-2">8</div>
    </div>
  );
}

export default HeroSection;
