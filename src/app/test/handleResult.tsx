import ShowError from "@/app/_components/showError";
import { Result } from "@/error-handling/wrap-with-try-catch";

export async function HandleFetchAction<T>(
  promise: Promise<Result<T>>
): Promise<Result<T> & { errorComponent: JSX.Element | null }> {
  try {
    const result = await promise;

    if (result.error)
      return { ...result, errorComponent: <ShowError result={result} /> };
    else return { ...result, errorComponent: null };
  } catch (error) {
    // Handle the caught error and ensure it is correctly typed
    // come here when other than AppError is thrown
    throw error;
    // return { data: null, error: <ShowError result={error} /> };
  }
}
