const router = require('express').Router()
import {Request, Response } from "express"
const Stripe = require('stripe')

const stripe = new Stripe(process.env.STRIPEPSS)

router.get('/', (req: Request,res:Response ) => {
    return res.send('hollaa')
} )

router.post('/', async (req: Request,res:Response )=> {
    const {id, amount} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount: amount,
            currency: "USD",
            description: "Clothe",
            payment_method : id,
            confirm: true
        })
    
        console.log(payment)
        return res.send({message: 'Pago realizado con éxito!'})
    } catch (error:any) {
            return res.json({
                message: error.raw.message
            })
            
    }

})





module.exports = router