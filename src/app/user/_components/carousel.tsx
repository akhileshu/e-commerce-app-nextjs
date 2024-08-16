import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavBarHeight } from "@/hooks/useNavBarHeight";

type CarouselItemData = {
  imgPath: string;
  url: string;
};

type CarouselDemoProps = {
  className?: string;
};

const items = [
  {
    imgPath: "/hero-section/image.png",
    url: "google.com",
  },
  {
    imgPath: "/hero-section/image.png",
    url: "google.com",
  },
  {
    imgPath: "/hero-section/image.png",
    url: "google.com",
  },
];

export function CarouselComponent({ className:carouselItemClassName }: CarouselDemoProps) {
  const navHeight = useNavBarHeight() || 100; // todo: always gives 0

  return (
    <Carousel className={cn("")}>
      <CarouselContent>
        {items.map((item, index) => (
          <CarouselItem
          className={cn("", carouselItemClassName)}
            key={index}
          >
            <Link href={""}>
              <Image
                src={item.imgPath}
                alt={`Image ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute cursor-pointer  left-10 top-[25%]" />
      <CarouselNext className="absolute cursor-pointer  right-10 top-[25%]" />
    </Carousel>
  );
}
