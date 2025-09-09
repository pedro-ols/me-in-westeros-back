/*
  Warnings:

  - You are about to drop the column `Realm` on the `houses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "characters" ADD COLUMN "imageUrl" TEXT;

-- CreateTable
CREATE TABLE "actors" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT,
    "age" INTEGER,
    "characterId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "actors_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "atributes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "strength" INTEGER NOT NULL,
    "intelligence" INTEGER NOT NULL,
    "agility" INTEGER NOT NULL,
    "endurance" INTEGER NOT NULL,
    "perception" INTEGER NOT NULL,
    "charisma" INTEGER NOT NULL,
    "luck" INTEGER NOT NULL,
    "characterId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "atributes_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "books" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "volume" INTEGER,
    "releaseYear" INTEGER,
    "coverUrl" TEXT,
    "coverAlt" TEXT,
    "synopsis" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_houses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "bannerUrl" TEXT NOT NULL,
    "bannerAlt" TEXT,
    "realm" TEXT,
    "slogan" TEXT,
    "history" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_houses" ("bannerAlt", "bannerUrl", "createdAt", "id", "name", "updatedAt") SELECT "bannerAlt", "bannerUrl", "createdAt", "id", "name", "updatedAt" FROM "houses";
DROP TABLE "houses";
ALTER TABLE "new_houses" RENAME TO "houses";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "actors_characterId_key" ON "actors"("characterId");
