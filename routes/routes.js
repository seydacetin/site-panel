import express from "express";
import {
  addUser,
  showUser,
  updatePassword,
  updateUser,
  addDuyuru,
  addGider,
  deleteUser,
  deleteGider,
  deleteDuyuru,
  addYazilacak,
  showYazilacak,
  addAidat,
  getAidat,
  updateAidat,
  showGider,
} from "../controller/user.js";

const router = express.Router();


router.post("/addUser", addUser);
router.get("/getAidat/:id", getAidat);
router.post("/addAidat", addAidat);
router.post("/updateUser", updateUser);
router.post("/updatePassword", updatePassword);
router.post("/updateAidat", updateAidat);
router.post("/showUser", showUser);
router.post("/addDuyuru", addDuyuru);
router.post("/addGider", addGider);
router.post("/addYazilacak", addYazilacak);
router.get("/showYazilacak/:id", showYazilacak);
router.delete("/deleteUser/:id", deleteUser);
router.delete("/deleteDuyuru/:id", deleteDuyuru);
router.delete("/deleteGider/:id", deleteGider);
router.get("/showGider/:id", showGider);

export default router;
