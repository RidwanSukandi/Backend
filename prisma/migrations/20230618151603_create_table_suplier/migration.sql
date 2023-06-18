-- CreateTable
CREATE TABLE `suplier` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_suplier` VARCHAR(100) NOT NULL,
    `nama_suplier` VARCHAR(100) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,
    `telepon` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `suplier_kode_suplier_key`(`kode_suplier`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
