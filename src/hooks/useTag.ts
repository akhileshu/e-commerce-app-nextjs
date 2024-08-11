// hooks/useTags.ts
import { useState, useRef, MutableRefObject, SetStateAction } from "react";

interface TagHandlers<T extends string> {
  tags: string[];
  tagInputRef: MutableRefObject<HTMLInputElement | null>;
  addTag: () => void;
  removeTag: (index: number) => void;
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

type UseTagsReturn<T extends string> = {
  [K in `${T}Tags`]: string[];
} & {
  [K in `${T}TagInputRef`]: MutableRefObject<HTMLInputElement | null>;
} & {
  [K in `add${Capitalize<T>}Tag`]: () => void;
} & {
  [K in `remove${Capitalize<T>}Tag`]: (index: number) => void;
} & {
  [K in `set${Capitalize<T>}Tags`]: (value: SetStateAction<string[]>) => void;
};

export function useTags<T extends string>(
  prefix: T,
  initialTags: string[] = []
): UseTagsReturn<T> {
  const [tags, setTags] = useState<string[]>(initialTags);
  const tagInputRef = useRef<HTMLInputElement | null>(null);

  const addTag = () => {
    const newTag = tagInputRef.current?.value;
    if (newTag) {
      setTags((previousTags) => [...previousTags, newTag]);
      tagInputRef.current!.value = "";
      tagInputRef.current!.focus();
    }
  };

  const removeTag = (removeTagIndex: number) => {
    setTags((previousTags) =>
      previousTags.filter((_, index) => index !== removeTagIndex)
    );
  };

  return {
    [`${prefix}Tags`]: tags,
    [`${prefix}TagInputRef`]: tagInputRef,
    [`add${capitalize(prefix)}Tag`]: addTag,
    [`remove${capitalize(prefix)}Tag`]: removeTag,
    [`set${capitalize(prefix)}Tags`]: setTags,
  } as UseTagsReturn<T>;
}

const capitalize = <T extends string>(s: T): Capitalize<T> =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}` as Capitalize<T>;
