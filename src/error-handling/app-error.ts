export class AppError extends Error {
  statusCode: number;

  constructor({
    error,
    message = error?.message || "Internal Server Error",
    statusCode = 500,
  }: {
    error?: Error;
    message?: string;
    statusCode?: number;
  }) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    if (process.env.NODE_ENV === "development" && error) {
      this.stack = error.stack;
    }
  }
}


