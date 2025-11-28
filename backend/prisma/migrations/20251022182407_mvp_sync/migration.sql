/*
  Warnings:

  - You are about to drop the column `birthYear` on the `Person` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Admin` DROP FOREIGN KEY `Admin_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Comment` DROP FOREIGN KEY `Comment_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Company` DROP FOREIGN KEY `Company_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Image` DROP FOREIGN KEY `Image_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Like` DROP FOREIGN KEY `Like_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Person` DROP FOREIGN KEY `Person_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_ibfk_1`;

-- DropForeignKey
ALTER TABLE `Purchase` DROP FOREIGN KEY `Purchase_ibfk_2`;

-- AlterTable
ALTER TABLE `Comment` MODIFY `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Company` ADD COLUMN `bannerPhoto` VARCHAR(191) NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `industry` VARCHAR(191) NULL,
    ADD COLUMN `location` VARCHAR(191) NULL,
    ADD COLUMN `logoPhoto` VARCHAR(191) NULL,
    ADD COLUMN `website` VARCHAR(191) NULL,
    MODIFY `rut` VARCHAR(191) NULL,
    MODIFY `legalReason` VARCHAR(191) NULL,
    MODIFY `groupName` VARCHAR(191) NULL,
    MODIFY `subGroupName` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Contact` MODIFY `message` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Course` MODIFY `description` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Message` MODIFY `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `Person` DROP COLUMN `birthYear`,
    ADD COLUMN `bannerPhoto` VARCHAR(191) NULL,
    ADD COLUMN `birthday` INTEGER NULL,
    ADD COLUMN `profilePhoto` VARCHAR(191) NULL,
    MODIFY `Ci` INTEGER NULL,
    MODIFY `highSchool` VARCHAR(191) NULL,
    MODIFY `description` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Post` MODIFY `content` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `role` ENUM('persons', 'companies', 'Admin') NOT NULL DEFAULT 'persons';

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Admin` ADD CONSTRAINT `Admin_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`courseId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Purchase` ADD CONSTRAINT `Purchase_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Image` ADD CONSTRAINT `Image_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Message` ADD CONSTRAINT `Message_chatId_fkey` FOREIGN KEY (`chatId`) REFERENCES `Chat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `Admin` RENAME INDEX `userId` TO `Admin_userId_key`;

-- RenameIndex
ALTER TABLE `Company` RENAME INDEX `rut` TO `Company_rut_key`;

-- RenameIndex
ALTER TABLE `Like` RENAME INDEX `Like_userId_postId_unique` TO `Like_userId_postId_key`;

-- RenameIndex
ALTER TABLE `User` RENAME INDEX `email` TO `User_email_key`;
