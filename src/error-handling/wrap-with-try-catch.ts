import { AppError } from "./app-error";
import { throwDbRequestError } from "./throw-error";

export const wrapTryCatch = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>
) => {
  return async (...args: A): Promise<T> => {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      throw error;
    }
  };
};
export const wrapWithDbTryCatch = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>
) => {
  return async (...args: A): Promise<T> => {
    try {
      const result = await fn(...args);
      return result;
    } catch (error) {
      throwDbRequestError(error);
      return undefined as never;
    }
  };
};

export type FormatedError = { name: string; message: string } | null;
type Result<T> =
  | { data: T; error: null }
  | { data: null; error: { name: string; message: string } };

export const handleError = <T, A extends any[]>(
  fn: (...args: A) => Promise<T>
) => {
  return async (...args: A): Promise<Result<T>> => {
    try {
      const result = await fn(...args);
      return { data: result, error: null };
    } catch (error) {
      if (error instanceof AppError) {
        return {
          data: null,
          error: { name: error.name, message: error.message },
        };
      }
      throw error;
    }
  };
};
