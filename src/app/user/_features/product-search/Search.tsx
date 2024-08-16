"use client";
import { cn } from "@/lib/utils";
import { SearchIcon, X } from "lucide-react";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import {
  categories,
  fetchKeywordSuggestions,
  scrollCarousel,
  testHistoryItems,
  useKeywordSuggestions,
} from "./lib";

export default function Search() {
  return (
    <div
      tabIndex={0}
      className=" group flex w-fit h-12 items-center rounded-sm focus-within:ring-4 focus-within:ring-amazon-orange"
    >
      <TopSearchCategories />
      <Input />
      <button className={cn("bg-amazon-orange p-2 rounded-r-sm")}>
        <SearchIcon size={"2rem"} />
      </button>
    </div>
  );
}

export function Input({ className }: { className?: string }) {
  const [term, setTerm] = useState("");
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setTerm(e.target.value);
  }
  const keywordSuggestions = useKeywordSuggestions(term);
  return (
    <div className={cn(className, "w-[40rem] h-12 overflow-visible")}>
      <input
        onChange={handleInputChange}
        value={term}
        className="py-3 mr-auto pl-1 w-full  outline-none "
        placeholder={"placeholder"}
        type="text"
        name=""
        id=""
      />
      <Suggestions
        keywordSuggestions={
          keywordSuggestions
        } className="hidden group-focus-within:block"
      />
    </div>
  );
}

function Suggestions({
  className,
  keywordSuggestions,
}: {
  className?: string;
  keywordSuggestions: string[];
}) {
  return (
    <div className={cn("min-h-80  bg-white border", className)}>
      {!keywordSuggestions.length ? (
        <div className="space-y-2 divide-y-2">
          <KeepShoppingFor />
          <RecentSearchHistory className="" />{" "}
        </div>
      ) : (
        <KeywordSuggestions keywordSuggestions={keywordSuggestions} />
      )}
    </div>
  );
}

export function KeepShoppingFor() {
  // Product pages visited recently
  return (
    //todo : scrollbar-none not working
    <div className=" m-2 space-y-2  overflow-x-hidden  relative scrollbar-none">
      <p className="font-bold text-lg">Keep shopping for</p>
      <div className="flex gap-2">
        <button
          className={cn(
            `${
              0 ? "hidden" : ""
            } absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1`
          )}
          onClick={() => scrollCarousel("left")}
        >
          ◀
        </button>
        <div className="flex gap-4 overflow-x-auto no-scrollbar">
          {Array.from({ length: 10 }).map((_, index) => {
            return (
              <div
                key={index}
                className="flex-shrink-0 size-36 rounded-sm border bg-gray-100"
              ></div>
            );
          })}
        </div>
        <button
          className={cn(
            `${
              0 ? "hidden" : ""
            } absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-1`
          )}
          onClick={() => scrollCarousel("right")}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

function KeywordSuggestions({
  keywordSuggestions,
}: {
  keywordSuggestions: string[];
}) {
  //suggestions as i type
  return (
    <div>
      {keywordSuggestions.map((term, index) => {
        return (
          <div key={index} className="hover:bg-gray-100 p-2 ">
            {/* <span className="text-gray-500">a</span> */}
            <span className="font-bold">{term}</span>
          </div>
        );
      })}
    </div>
  );
}
export function RecentSearchHistory({ className }: { className: string }) {
  function handleHistoryItemDelete() {}
  return (
    <div className={cn("", className)}>
      {testHistoryItems.map(({ id, term, category }, index) => (
        <div
          key={id}
          className="flex justify-between py-2 px-3 hover:bg-gray-200"
        >
          <div className="space-x-2 ">
            <span className="font-medium text-purple-600 text-lg">{term}</span>
            <span className="text-gray-500">In</span>
            <span>{category}</span>
          </div>
          <X className="" onClick={handleHistoryItemDelete} />
        </div>
      ))}
    </div>
  );
}

export function TopSearchCategories({ className }: { className?: string }) {
  return (
    <select
      className={cn(
        "bg-gray-200  h-12  rounded-l-sm border-r-[2px] border-gray-300",
        className
      )}
    >
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
}
