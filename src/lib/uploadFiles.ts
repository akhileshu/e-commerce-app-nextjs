"use server";
import fs from "fs/promises";

export async function uploadImageAndGetUrl(file: File) {
  await fs.mkdir("products", { recursive: true });
  const imagePath = `/products/${crypto.randomUUID()}-${file.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await file.arrayBuffer())
  );
  return imagePath;
}
