/*
  Warnings:

  - You are about to drop the column `quanity` on the `Sales` table. All the data in the column will be lost.
  - You are about to drop the `ExpensesByCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `quantity` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExpensesByCategory" DROP CONSTRAINT "ExpensesByCategory_expenseSummaryId_fkey";

-- AlterTable
ALTER TABLE "Sales" DROP COLUMN "quanity",
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- DropTable
DROP TABLE "ExpensesByCategory";

-- CreateTable
CREATE TABLE "ExpenseByCategory" (
    "expenseByCategoryId" TEXT NOT NULL,
    "expenseSummaryId" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "amount" BIGINT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ExpenseByCategory_pkey" PRIMARY KEY ("expenseByCategoryId")
);

-- AddForeignKey
ALTER TABLE "ExpenseByCategory" ADD CONSTRAINT "ExpenseByCategory_expenseSummaryId_fkey" FOREIGN KEY ("expenseSummaryId") REFERENCES "ExpenseSummary"("expenseSummaryId") ON DELETE RESTRICT ON UPDATE CASCADE;
