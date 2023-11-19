import mercadopago from 'mercadopago';
import {MERCADOPAGO_API_KEY} from '../config.js';
import {HOST}  from '../config.js';


export const createOrder = async (req, res) => {

    mercadopago.configure({
        access_token:MERCADOPAGO_API_KEY 
    });

    try {
        const result = await mercadopago.preferences.create({
            items: [
                {
                    title: "Laptop Lenovo ",
                    unit_price: 40000,
                    currency_id: "COL",
                    quantity: 1,
                }],
            back_urls: {
                success: `${HOST}/success`,
                failure: `${HOST}/failure`,
                pending: `${HOST}/pending`,
            },
            notification_url: "https://7cb5-186-31-178-191.ngrok.io/webhook",
        })
        console.log(result)
        res.send(result.body)

    } catch (error) {
        console.log(error);

        res.status(500).json({
            message: "Error al crear el pedido"
        });

    }

};


export const reciveWebhook = async (req, res) => {

  try{
    const payment = req.body;
    if (payment === 'payment') {
        const data = await mercadopago.payment.findById(req.query['data.id']);

        console.log(data);
    }

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500).json({error: error.message});    
  }
  
}