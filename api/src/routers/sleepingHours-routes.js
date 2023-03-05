const router = require("express").Router();

const SleepingHoursService = require("../services/sleppingHours");
const sleepingHoursService = new SleepingHoursService();

router.post("/", sleepingHoursService.create);
router.get("/", sleepingHoursService.fetch);

module.exports = router;
