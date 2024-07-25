import express from "express";
import { createDetails, deleteDetails, getAllDetails } from "../controller/downloadBrochureController.js";

const router = express.Router();


// Login User ----------------------> Public
router.route("/create").post( createDetails);
router.route("/all").get( getAllDetails);
router.route("/del/:id").delete(deleteDetails);


export default router;