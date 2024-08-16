import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

export const categories = [
  "Technology",
  "Health & Wellness",
  "Education",
  "Finance",
  "Travel",
  "Food & Beverage",
  "Sports",
  "Entertainment",
  "Fashion",
  "Art & Design",
];

export function scrollCarousel(direction: "left" | "right") {
  const container = document.querySelector(".no-scrollbar");
  if (container) {
    const scrollAmount = container.clientWidth / 2; // Scroll by half the width of the container
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }
}

export   const testHistoryItems = [
  { id: "1", term: "React", category: "Technology" },
  { id: "2", term: "Yoga", category: "Health & Wellness" },
  { id: "3", term: "Javascript", category: "Technology" },
  { id: "4", term: "Travel", category: "Travel" },
];

export const useSearchTem=()=>{
    const [searchTerm, setSearchTerm] = React.useState("");

}

export const fetchKeywordSuggestions = ():Promise<string[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Suggestion 1", "Suggestion 2", "Suggestion 3"]);
    }, 500); // Simulate a 1-second delay
  });
};

export const useKeywordSuggestions = (term: string) => {
  const [keywordSuggestions, setKeywordSuggestions] = useState<string[]>([]);

  useEffect(() => {
    const LastLetterTypedOn = Date.now();

    const timer = setTimeout(() => {
      const elapsedTime = Date.now() - LastLetterTypedOn;
      if (!term.length) {
        setKeywordSuggestions([]);
      } else if (elapsedTime >= 200) {
        console.log("requesting DB");
        fetchKeywordSuggestions().then((suggestions) => {
          setKeywordSuggestions(suggestions);
        });
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [term]);

  return keywordSuggestions;
};

