import express from "express";
import userRouter from "./routes/users.js";
import productRouter from "./routes/product.js";
import suplierRouter from "./routes/suplier.js";

const app = express();

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/suplier", suplierRouter);

app.listen(4000, () => {
  console.log(`server is running port 4000`);
});
