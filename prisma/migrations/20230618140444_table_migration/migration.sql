-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` INTEGER NOT NULL,
    `nama` VARCHAR(100) NOT NULL,
    `alamat` LONGTEXT NOT NULL,
    `telepon` VARCHAR(15) NOT NULL,
    `username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
    `level` VARCHAR(100) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kode_barang` VARCHAR(100) NOT NULL,
    `nama_barang` VARCHAR(100) NOT NULL,
    `jenis_barang` VARCHAR(100) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `satuan` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `product_kode_barang_key`(`kode_barang`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
