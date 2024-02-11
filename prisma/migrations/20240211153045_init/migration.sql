/*
  Warnings:

  - Added the required column `email` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Test` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Test" ("id", "name") SELECT "id", "name" FROM "Test";
DROP TABLE "Test";
ALTER TABLE "new_Test" RENAME TO "Test";
CREATE UNIQUE INDEX "Test_email_key" ON "Test"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
