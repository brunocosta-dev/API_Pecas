import express from 'express'
import { postParts, getByNameParts } from '../controller/partsController.js';

let router = express.Router();

router.post("/parts",postParts);
// router.get("/parts",getAllParts);
router.get("/parts",getByNameParts);

export {router};