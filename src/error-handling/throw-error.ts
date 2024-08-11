import {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
} from "@prisma/client/runtime/library";
import { AppError } from "./app-error";
import { PrismaKnownError, PrismaUnknownError } from "./custom-error-classes";

export const throwDbRequestError = (error: unknown) => {
  if (!(error instanceof Error)) throw new Error();
  else if (error instanceof PrismaClientKnownRequestError)
    throw new PrismaKnownError(error);
  else if (error instanceof PrismaClientUnknownRequestError)
    throw new PrismaUnknownError(error);
  else if (error.message.includes("Network error"))
    throw new AppError({ error, message: "Network Error" });
  else throw new AppError({ error });
};
