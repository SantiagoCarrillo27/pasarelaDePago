import { Router } from "express";
import { createOrder } from "../controllers/payment.controller.js";
import { reciveWebhook } from "../controllers/payment.controller.js";

const router = Router();


router.post('/create-order', createOrder);


router.get('/success', (req, res) => { res.send('success order'); });
router.get('/failure', (req, res) => { res.send('Fallo la orden'); });
router.get('/pending', (req, res) => { res.send('Orden pendiente'); });

router.post('/webhook',reciveWebhook );


export default router;