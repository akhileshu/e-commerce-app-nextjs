"use client"
import React, { useEffect, useRef } from 'react'


function page() {
  return (
    <ParentComponent/>
  )
}

export default page
const ParentComponent = () => {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <Input myRef={inputRef} placeholder="Enter text" />
    </div>
  );
};

const Input = (props) => {
  return (
    <input type="text" placeholder={props.placeholder} ref={props.myRef} />
  );
};


// const fileSchema = z.instanceof(FileList, { message: "Required" });

// Define a schema for a single file
const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5000000, {
    message: "File size should not exceed 5MB",
  })
  .refine((file) => /^image\/.*/.test(file.type), {
    message: "Only image files are allowed",
  });

// Define a schema for validating a FileList object
// const fileListSchema = z.instanceof(FileList).refine(fileList=>Array.from(fileList).every((file) => fileSchema.pipe(file)))

const fileListSchema = z.instanceof(FileList).refine(
  (fileList) => {
    const filesArray = Array.from(fileList);
    // Validate each file against the file schema
    const isValid = filesArray.every(
      (file) => fileSchema.safeParse(file).success
    );
    // Ensure there are no more than 3 files
    return isValid && filesArray.length <= 3;
  },
  {
    message: "You can only upload up to 3 valid image files (each under 5MB)",
  }
);