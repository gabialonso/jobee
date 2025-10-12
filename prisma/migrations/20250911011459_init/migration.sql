-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CreateTable `Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CreateTable `Person` (
        `firstName` VARCHAR(191) NOT NULL,
        `lastName`  VARCHAR(191),
        'birthday'  INTEGER NOT NULL,
        'Ci'        INTEGER NOT NULL,
        'highSchool'VARCHAR(191) NOT NULL,
        'description' TEXT NOT NULL,
        'cv'       VARCHAR(191) NOT NULL,
        'linkedin' VARCHAR(191) NOT NULL,
        `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
        `updatedAt` DATETIME(3) NOT NULL,

        UNIQUE INDEX `Profile_userId_key`(`userId`),
        PRIMARY KEY (`id`),
        foreign key (`userId`) references `User`(`id`
    )
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
creareTable 'company' (
        'id' INTEGER NOT NULL AUTO_INCREMENT,
        'rut' INTEGER NOT NULL,
        'name' VARCHAR(191) NOT NULL,
        'legalReason' VARCHAR(191) NOT NULL,
        'groupName' VARCHAR(191) NOT NULL,
        'subGroupName' VARCHAR(191) NOT NULL,

        UNIQUE INDEX `Company_userId_key`(`userId`),
        PRIMARY KEY (`id`),
        foreign key (`userId`) references `User`(`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
