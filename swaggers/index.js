import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import express from "express";
import swaggerUI from "swagger-ui-express";
import swaggerDoc from "swagger-jsdoc";
//配置swagger-jsdoc
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "危废测试接口",
      version: "1.0.0",
      description: ``,
    },
  },
  // 去哪个路由下收集 swagger 注释
  apis: [path.join(__dirname, "../routes/*.js")],
};

var swaggerJson = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
};
const swaggerSpec = swaggerDoc(options);

var swaggerInstall = function (app) {
  if (!app) {
    app = express();
  }
  // 开放相关接口，
  app.get("/swagger.json", swaggerJson);
  // 使用 swaggerSpec 生成 swagger 文档页面，并开放在指定路由
  app.use("/swagger", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
};

export default swaggerInstall;
