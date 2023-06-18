import Prisma from "../database.js";

const createProduct = async (req, res, next) => {
  try {
    const { nama_barang, jenis_barang, jumlah, satuan } = req.body;
    const characther = "123456789";
    const lenght = characther.length;
    var IdUniqe = "";

    for (let index = 0; index < 7; index++) {
      IdUniqe += characther.charAt(Math.floor(Math.random() * lenght));
    }

    const countProduct = await Prisma.product.count({
      where: {
        nama_barang: nama_barang,
      },
    });

    if (countProduct < 1) {
      const create = await Prisma.product.create({
        data: {
          kode_barang: `BR-${IdUniqe}`,
          nama_barang,
          jenis_barang,
          jumlah,
          satuan,
        },
      });

      if (create) {
        res
          .status(200)
          .json({
            message: "success",
            statusCode: 200,
          })
          .end();
      }
    } else {
      res.status(400).json({
        message: "failed",
        statusCode: 400,
      });
    }
  } catch (error) {
    next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const result = await Prisma.product.findMany({
      select: {
        id: true,
        kode_barang: true,
        nama_barang: true,
        jenis_barang: true,
        jumlah: true,
        satuan: true,
      },
    });

    res.status(200).json({ message: "success", statusCode: 200, data: result })
      .headersSent;

    if (!result) {
      res.status(404).json({ message: "not found", statusCode: 404 });
    }
  } catch (error) {
    next(error);
  }
};

const updateProduct = async (req, res) => {
  const { kode_barang, nama_barang, jenis_barang, jumlah, satuan } = req.body;

  const id = req.params.id;

  const update = await Prisma.product.update({
    where: { id: parseInt(id) },
    data: {
      kode_barang,
      nama_barang,
      jenis_barang,
      jumlah,
      satuan,
    },
  });

  if (update) {
    res.status(200).json({
      statusCode: 200,
      message: "success",
    });
  } else {
    res.status(400).json({
      statusCode: 200,
      message: "failed",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Prisma.product.delete({
      where: {
        id: parseInt(id),
      },
    });
    if (result) {
      res.status(200).json({ message: "success", statusCode: 200 });
    } else {
      res.status(400).json({ message: "failed", statusCode: 400 });
    }
  } catch (error) {
    next(error);
  }
};

export { createProduct, updateProduct, deleteProduct, findAll };
