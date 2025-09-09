/*
  Warnings:

  - You are about to drop the `atributes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."atributes" DROP CONSTRAINT "atributes_characterId_fkey";

-- AlterTable
ALTER TABLE "public"."characters" ADD COLUMN     "atributes" JSONB[];

-- DropTable
DROP TABLE "public"."atributes";
