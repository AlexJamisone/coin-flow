/*
  Warnings:

  - Added the required column `currency` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Income" ADD COLUMN     "currency" TEXT NOT NULL;
