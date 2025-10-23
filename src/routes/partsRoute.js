import express from 'express'
import { postParts, getByNameParts, putParts, deleteParts } from '../controller/partsController.js';

let router = express.Router();

router.post("/parts",postParts);
// router.get("/parts",getAllParts);
router.get("/parts",getByNameParts);
router.put("/parts",putParts);
router.delete("/parts",deleteParts);

export {router};