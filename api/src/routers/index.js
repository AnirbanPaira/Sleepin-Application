const router = require("express").Router();
const User = require("../models/User-models");
const UserRouter = require("./user-routes");
const DateRouter = require("./date-routes");
const SleepingRouter = require("./sleepingHours-routes");
const jwt = require("jsonwebtoken");
router.use("/user/register", UserRouter);
router.use("/user/register/date", DateRouter);
router.use("/user/register/sleepingHours", SleepingRouter);
// router.post("/user/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({
//         error: "Please Enter Email and Password",
//       });
//     }
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({
//         error: "User Not Exist",
//       });
//     }
//     if (password != user.password) {
//       return res.status(401).json({
//         error: "Password Not Match",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       user,
//     });
//   } catch (error) {
//     res.status(401).json({
//       success: false,
//       error: error.message,
//     });
//   }
// });

module.exports = router;
