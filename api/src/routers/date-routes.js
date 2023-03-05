const router = require("express").Router();

const DateService = require("../services/Date");
const dateService = new DateService();

router.post("/", dateService.create);
router.get("/", dateService.fetch);

module.exports = router;
