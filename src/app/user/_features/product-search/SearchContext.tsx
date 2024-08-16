// context/SearchContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";

interface SearchContextType {
  term: string;
  setTerm: (term: string) => void; // Add this line
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e?: FormEvent<HTMLFormElement>,productId?:string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const handleSubmit = (e?: FormEvent<HTMLFormElement>, productId?: string) => {
    if (e) e.preventDefault();
    if(productId)console.log("querying product from your view history...")
    else console.log("Querying in DB with term:", term);
    // Add your DB query logic here
  };

  return (
    <SearchContext.Provider
      value={{ term, setTerm, handleInputChange, handleSubmit }}
    >
      {children}
    </SearchContext.Provider>
  );
};
