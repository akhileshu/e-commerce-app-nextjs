import db from "@/db/db";
import { wrapWithDbTryCatch } from "@/error-handling/wrap-with-try-catch";

export const getOrders = wrapWithDbTryCatch(async (sellerId:string) => {
  const orders = await db.orderItem.groupBy({
    by: ["orderId"],
    where: {
      product: {
        sellerId,
      },
    },
  });
});
