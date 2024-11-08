import express from "express";
import "express-async-errors";
import gsRouter from "./routes/gsRouter.js";
import testRouter from "./routes/testRouter.js";
import swaggerInstall from "./swaggers/index.js";

const app = express();
const port = 5601;
swaggerInstall(app);

// 全局返回头
app.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router的总的调用方法
app.use("/iot", gsRouter);
app.use("/test", testRouter);

//全局报错处理
app.use(function (err, req, res, next) {
  return res.json({ code: 500, message: "服务器异常" });
});

//启用方法
app.listen(port, () => {
  console.log(`Now, app listening on port ${port}`);
});
