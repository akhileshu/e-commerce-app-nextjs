import { handleError } from "@/error-handling/wrap-with-try-catch";
import { ActionSuccessBase } from "@/types/shared";
import { z } from "zod";

const actionSchema = z.object({
})

export const action = handleError(
  async (prevState: unknown, formData: FormData) => {
    const { success, data, error } = actionSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (error) {
      return { formErrors: error.formErrors.fieldErrors };
    }

    // const productVariant = await actionInDB(data);

    type Success = ActionSuccessBase & {};
    const successObj: Success = {
      message: "successfully done",
    };
    return {
      success: successObj,
    };
  }
);