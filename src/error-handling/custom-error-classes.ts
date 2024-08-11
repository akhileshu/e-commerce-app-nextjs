import { PrismaClientKnownRequestError, PrismaClientUnknownRequestError } from "@prisma/client/runtime/library";
import { AppError } from "./app-error";

export class NotFoundError extends AppError {
  constructor(message?: string, statusCode = 404) {
    super({ message: message || "Not Found", statusCode });
  }
}
export class PrismaKnownError extends AppError {
  constructor(error: PrismaClientKnownRequestError) {
    super({ error });
  }
}
export class PrismaUnknownError extends AppError {
  constructor(error: PrismaClientUnknownRequestError) {
    super({ error });
  }
}
export class UnauthorizedError extends AppError {
  constructor(
    message: string = "You are not authorized to access this resource."
  ) {
    super({message});
  }
}

export class UnauthenticatedError extends AppError {
  constructor(
    message: string = "You must be authenticated to access this resource."
  ) {
    super({message});
  }
}
export class ValidationError extends AppError {
  constructor(message: string = "There was a validation error.") {
    super({message});
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = "There was an authentication error.") {
    super({message});
  }
}