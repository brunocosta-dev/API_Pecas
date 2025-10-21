import express from 'express'
import { postParts } from '../controller/partsController.js';

let router = express.Router();

router.post("/parts",postParts);

export {router};