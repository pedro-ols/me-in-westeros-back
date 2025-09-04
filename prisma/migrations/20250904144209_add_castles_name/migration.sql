/*
  Warnings:

  - Added the required column `name` to the `castles` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_castles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "houseId" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "castles_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "houses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_castles" ("createdAt", "houseId", "id", "updatedAt") SELECT "createdAt", "houseId", "id", "updatedAt" FROM "castles";
DROP TABLE "castles";
ALTER TABLE "new_castles" RENAME TO "castles";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
