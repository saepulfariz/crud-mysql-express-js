const express = require("express");


  const {
    homeIndex,
    homeShow,
    homeNew,
    homeCreate,
    homeEdit,
    homeUpdate,
    homeDelete,
  } = require("../controllers/HomeController");

const router = express.Router(); 

router.get("/", homeIndex);
router.get("/mahasiswa", homeIndex);
router.get("/mahasiswa/new", homeNew);
router.post("/mahasiswa", homeCreate);
router.get("/mahasiswa/:id", homeShow);
router.post("/mahasiswa/:id", homeUpdate);
router.get("/mahasiswa/:id/edit", homeEdit);
router.get("/mahasiswa/:id/delete", homeDelete);


module.exports = router;