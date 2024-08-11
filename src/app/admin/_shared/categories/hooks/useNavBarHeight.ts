

import { useEffect, useState } from "react";

export function useNavBarHeight() {
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    const updateNavHeight = () => {
      const nav = document.querySelector("nav"); // Replace with your navigation selector
      if (nav) {
        setNavHeight(nav.offsetHeight);
      }
    };

    // Initial update
    updateNavHeight();

    // Update on resize or other relevant events
    window.addEventListener("resize", updateNavHeight);

    // Clean-up listener
    return () => {
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []); // Empty dependency array to run only once on mount

  return navHeight;
}
