-- CreateTable
CREATE TABLE `postulaciones` (
    `id_postulation` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `company_name` VARCHAR(100) NOT NULL,
    `location` VARCHAR(100) NOT NULL,
    `area` VARCHAR(50) NOT NULL,
    `requirements` VARCHAR(191) NOT NULL,
    `job_type` ENUM('TIEMPO_COMPLETO', 'MEDIO_TIEMPO', 'FREELANCE', 'PRACTICAS') NOT NULL,
    `themes` VARCHAR(100) NULL,
    `posted_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` ENUM('ACTIVA', 'CERRADA') NOT NULL DEFAULT 'ACTIVA',
    `id_company` INTEGER NULL,

    PRIMARY KEY (`id_postulation`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postulaciones_aplicaciones` (
    `id_application` INTEGER NOT NULL AUTO_INCREMENT,
    `id_person` INTEGER NOT NULL,
    `id_postulation` INTEGER NOT NULL,
    `message` VARCHAR(191) NULL,
    `applied_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_application`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `postulaciones` ADD CONSTRAINT `postulaciones_id_company_fkey` FOREIGN KEY (`id_company`) REFERENCES `Company`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postulaciones_aplicaciones` ADD CONSTRAINT `postulaciones_aplicaciones_id_postulation_fkey` FOREIGN KEY (`id_postulation`) REFERENCES `postulaciones`(`id_postulation`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `postulaciones_aplicaciones` ADD CONSTRAINT `postulaciones_aplicaciones_id_person_fkey` FOREIGN KEY (`id_person`) REFERENCES `Person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
