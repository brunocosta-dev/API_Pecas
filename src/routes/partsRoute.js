import express from 'express'
import { postParts, getByNameParts, putParts, deleteParts } from '../controller/partsController.js';

let router = express.Router();

router.post("/add",postParts);
// router.get("/parts",getAllParts);
router.get("/search-part",getByNameParts);
router.put("/update-part",putParts);
router.delete("/delete-part",deleteParts);

export {router};