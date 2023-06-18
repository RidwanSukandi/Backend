import Prisma from "../database.js";

const createSuplier = async (req, res, next) => {
  try {
    const { nama_suplier, alamat, telepon } = req.body;
    const characther = "123456789";
    const lenght = characther.length;
    var IdUniqe = "";

    for (let index = 0; index < 7; index++) {
      IdUniqe += characther.charAt(Math.floor(Math.random() * lenght));
    }

    const countSuplier = await Prisma.suplier.count({
      where: {
        nama_suplier: nama_suplier,
      },
    });

    if (countSuplier < 1) {
      const create = await Prisma.suplier.create({
        data: {
          kode_suplier: `SUP-${IdUniqe}`,
          nama_suplier,
          alamat,
          telepon,
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
    const result = await Prisma.suplier.findMany({
      select: {
        id: true,
        kode_suplier: true,
        nama_suplier: true,
        alamat: true,
        telepon: true,
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

const updateSuplier = async (req, res) => {
  const { kode_suplier, nama_suplier, alamat, telepon } = req.body;

  const id = req.params.id;

  const update = await Prisma.suplier.update({
    where: { id: parseInt(id) },
    data: {
      kode_suplier,
      nama_suplier,
      alamat,
      telepon,
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

const deleteSuplier = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Prisma.suplier.delete({
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

export { createSuplier, updateSuplier, deleteSuplier, findAll };
