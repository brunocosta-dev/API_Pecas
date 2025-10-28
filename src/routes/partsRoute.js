import express from 'express'
import { postParts, getParts, putParts, deleteParts } from '../controller/partsController.js';

let router = express.Router();

router.post("/create-part",postParts);
router.get("/search-part",getParts);
router.put("/update-part/:id",putParts);
router.delete("/delete-part/:id",deleteParts);

export {router};