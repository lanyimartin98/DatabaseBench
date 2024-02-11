/*
  Warnings:

  - You are about to drop the column `number` on the `Test` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT
);
INSERT INTO "new_Test" ("id") SELECT "id" FROM "Test";
DROP TABLE "Test";
ALTER TABLE "new_Test" RENAME TO "Test";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
