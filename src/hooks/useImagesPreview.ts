// hooks/useImages.ts
import { useState } from "react";

export function useImagesPreview() {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  return {
    selectedImages,
    handleImageChange,
  };
}
