const express = require("express");


// const {
//     registerView,
//     loginView,
//     registerUser,
//     loginUser,
//   } = require("../controllers/loginController");

  // const {
  //   home
  // } = require("../controllers/BaseController");

  // import { Home} from "../controllers/Home";

  const HomeController = require("../controllers/Home");
  
  const router = express.Router(); 
  
  const Home = new HomeController();
router.get("/", Home.index);
router.get("/app", Home.res);
router.get("/home", Home.home);
// router.get("/login", loginView);
// //Dashboard
// router.get("/dashboard", protectRoute, dashboardView);

// router.post("/register", registerUser);
// router.post("/login", loginUser);

module.exports = router;