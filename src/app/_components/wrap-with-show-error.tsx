import React, { ReactNode } from "react";
import ShowError from "./showError";
import { FormatedError } from "@/error-handling/wrap-with-try-catch";

interface WithErrorHandlingProps<T> {
  className?: string;
  data: T | null;
  error: FormatedError;
  children: ReactNode;
}

export function WrapWithShowError<T>({
  className,
  data,
  error,
  children,
}: WithErrorHandlingProps<T>) {
  if (error) {
    return <ShowError error={error} />;
  }

  if (!data) {
    return null;
  }

  return <div className={className}>{children}</div>;
}
