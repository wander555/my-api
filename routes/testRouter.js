const express = require("express");
const router = express.Router();

/**,
 * @swagger
 * /test/jointsky-hazardous-waste/info:
 *    get:
 *      tags:
 *      - 六安危废
 *      summary: 获取基础信息
 *      produces:
 *      - application/json
 *      responses:
 *        200:
 *          description: ok
 *        500:
 *          description: 系统异常
 * */
router.get("/jointsky-hazardous-waste/info", async (req, res, next) => {
  let data = {
    disposalFacilitiesList: [
      {
        disposalMethod: "C1水泥窑共处置",
        facilitiesAddress: "设施1地址",
        facilitiesCode: "ss001",
        facilitiesName: "设施1",
        id: "",
        status: 1,
        verifyStatus: 1,
      },
    ],
    enterpriseName: "OPD有限公司2",
    hazardousList: [
      {
        containerType: "吨",
        containerVolume: "25L",
        hazardousCode: "001-001",
        hazardousName: "危废001",
        id: "waste001",
        status: 1,
        verifyStatus: 1,
      },
    ],
    id: "opddddddd",
    licenseNumber: "opdlicenseNumber",
    storageFacilitiesList: [
      {
        facilitiesAddress: "六安",
        facilitiesCode: "luan001",
        facilitiesName: "六安仓库1",
        facilitiesSize: 222,
        facilitiesSizeUnit: "立方米",
        facilitiesType: "贮存库",
        id: "",
        storageAbility: 1111,
        storageAbilityUnit: "吨",
      },
    ],
  };

  res.send(showResData("200", "ok", data));
});

const showResData = (code, msg, data = []) => {
  return {
    code,
    msg,
    data,
  };
};

module.exports = router;
