import express from "express";
const router = express.Router();

/**,
 * @swagger
 * /iot/weight:
 *    post:
 *      tags:
 *      - 江苏神采版本
 *      summary: 1、称重上报
 *      produces:
 *      - application/json
 *      responses:
 *        1000:
 *          description: ok
 * */
router.post("/weight", async (req, res, next) => {
  const randomValue = Math.random();
  if (randomValue < 0.9) {
    let batchNo =
      "cc" + require("crypto").randomBytes(16).toString("hex") + "001";
    let data = {
      packageCode: batchNo,
      qrCode: "http://www.wander555.cc/b.html?b=" + batchNo,
    };

    res.send(showResData("1000", "ok", data));
  } else {
    res.send(showResData("4008", "token 令牌与单位标识不对应", ""));
  }
});

/**,
 * @swagger
 * /iot/outInventory:
 *    post:
 *      tags:
 *      - 江苏神采版本
 *      summary: 2、出库
 *      produces:
 *      - application/json
 *      responses:
 *        1000:
 *          description: ok
 * */
router.all("/outInventory", async (req, res, next) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    res.send(showResData("1000", "ok", ""));
  } else {
    res.send(showResData("7010", "批次与单位标识不对应", ""));
  }
});

/**
 * 3.调整入库量
 */
router.get("/adjustedInventory", async (req, res, next) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    res.send(showResData("1000", "ok", ""));
  } else {
    res.send(showResData("7005", "批次数据异常", ""));
  }
});

/**
 * 4.取消入库
 */
router.post("/cancelweight", async (req, res, next) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    res.send(showResData("1000", "ok", ""));
  } else {
    res.send(showResData("6012", "已有业务动作产生，不允许取消称重", ""));
  }
});

/**
 * 5.取消出库
 */
router.get("/cancelOutInventory", async (req, res, next) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    res.send(showResData("1000", "ok", ""));
  } else {
    res.send(showResData("7004", "批次库存状态已发生变化", ""));
  }
});

/**
 * @swagger
 * /iot/getData:
 *  post:
 *    tags:
 *    - test
 *    summary: Get data
 *    description: Get data from the server
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              yourDataField:
 *                type: string
 *                description: The data field
 *    responses:
 *      200:
 *        description: The data was successfully received
 */
router.post("/getData", (req, res) => {
  // req.body 包含了POST请求的数据
  const data = req.body;

  // 处理数据...

  // 发送响应
  res.send(showResData("1000", "ok", data));
});

const showResData = (code, msg, data = []) => {
  return {
    code,
    msg,
    data,
  };
};

export default router;
