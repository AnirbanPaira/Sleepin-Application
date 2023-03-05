const router = require("express").Router();

const UserService = require("../services/User");
const userService = new UserService();

router.post("/", userService.create);
router.get("/", userService.fetch);
router.patch("/:id", userService.update);
router.delete("/:id", userService.delete);

module.exports = router;
