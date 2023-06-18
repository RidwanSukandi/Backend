import Prisma from "../database.js";
import response from "../responseError/responseError.js";
import bcrypt from "bcrypt";

const createUser = async (req, res, next) => {
  try {
    const { nama, alamat, telepon, username, password, level } = req.body;

    const characther = "123456789";
    const lenght = characther.length;
    var IdUniqe = "";

    for (let index = 0; index < 7; index++) {
      IdUniqe += characther.charAt(Math.floor(Math.random() * lenght));
    }

    const countUser = await Prisma.users.count({
      where: {
        username: username,
      },
    });

    if (countUser < 1) {
      const create = await Prisma.users.create({
        data: {
          nik: parseInt(IdUniqe),
          nama,
          alamat,
          telepon,
          username,
          password: await bcrypt.hash(password, 10),
          level,
        },
      });

      if (create) {
        res.status(200).json({
          message: "success",
          statusCode: 200,
          data: {
            nik: create.nik,
            nama: create.nama,
            alamat: create.alamat,
            telepon: create.telepon,
            username: create.username,
            level: create.level,
          },
        });
      }
    } else {
      var error = response(400, "username allready");
      res.status(400).json({
        error: {
          statusCode: error.status,
          message: error.message,
        },
      });
    }
  } catch (e) {
    next(e);
  }
};

const updateUser = async (req, res) => {
  const { nama, alamat, telepon, username, password, level } = req.body;
  const id = req.params.id;

  const update = await Prisma.users.update({
    where: { id: parseInt(id) },
    data: {
      nama,
      alamat,
      telepon,
      username,
      password: await bcrypt.hash(password, 10),
      level,
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

const findAll = async (req, res, next) => {
  try {
    const result = await Prisma.users.findMany({
      select: {
        id: true,
        nik: true,
        nama: true,
        alamat: true,
        telepon: true,
        username: true,
        level: true,
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

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Prisma.users.delete({
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

export { createUser, updateUser, findAll, deleteUser };
