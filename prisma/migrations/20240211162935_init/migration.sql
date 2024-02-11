/*
  Warnings:

  - The primary key for the `Test` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Test` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Test` table. All the data in the column will be lost.
  - Added the required column `boolean` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `int` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `string` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uniqueKey` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Test" (
    "uniqueKey" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "string" TEXT NOT NULL,
    "int" INTEGER NOT NULL,
    "date" DATETIME NOT NULL,
    "boolean" BOOLEAN NOT NULL
);
DROP TABLE "Test";
ALTER TABLE "new_Test" RENAME TO "Test";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
