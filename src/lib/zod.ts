import { z } from "zod";

export const stringToJSONSchema = z
  .string()
  .transform((str, ctx) /* : z.infer<ReturnType<typeof json>> */ => {
    try {
      return JSON.parse(str);
    } catch (e) {
      ctx.addIssue({ code: "custom", message: "Invalid JSON" });
      return z.NEVER;
    }
  });

export const stringToNumberSchema = z
  .string()
  .transform((str, ctx) /* : z.infer<ReturnType<typeof json>> */ => {
    try {
      return parseFloat(str);
    } catch (e) {
      ctx.addIssue({ code: "custom", message: "Invalid String" });
      return z.NEVER;
    }
  });
