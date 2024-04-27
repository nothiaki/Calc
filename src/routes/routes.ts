import express from 'express';
import * as arithmeticController from '../controller/arithmetic/index';

const router = express.Router();

router.get('/arithmetic/addition', arithmeticController.addition);
router.get('/arithmetic/subtraction', arithmeticController.subtraction);
router.get('/arithmetic/multiplication', arithmeticController.multiplication);

export default router;
