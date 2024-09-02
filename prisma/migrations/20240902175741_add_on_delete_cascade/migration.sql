-- DropForeignKey
ALTER TABLE "Component" DROP CONSTRAINT "Component_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "Bike"("id") ON DELETE CASCADE ON UPDATE CASCADE;
