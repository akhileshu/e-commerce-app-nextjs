import { useState } from "react";

export function useFormValues<T extends Record<string, any>>(initialValues: T) {
  const [formValues, setFormValues] = useState<T>(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return { formValues, setFormValues, handleChange };
}
