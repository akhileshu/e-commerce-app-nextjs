-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SELLER', 'USER', 'ADMIN');

-- AlterTable
ALTER TABLE "Seller" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'SELLER';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole" NOT NULL DEFAULT 'USER';
