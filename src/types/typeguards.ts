export function isErrorResult(
  obj: unknown
): obj is { error: { name: string; message: string } } {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "error" in obj &&
    typeof obj.error === "object" &&
    obj.error !== null &&
    "name" in obj.error &&
    typeof obj.error.name === "string" &&
    "message" in obj.error &&
    typeof obj.error.message === "string"
  );
}
