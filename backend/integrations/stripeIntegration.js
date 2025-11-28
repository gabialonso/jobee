import Stripe from "stripe";
import dotenv from "dotenv";


dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req, res) {
  try {
    const amount = Number(req.body.amount) || 1000;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
      metadata: { project: "proyecto-final" },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creando PaymentIntent:", error);
    res.status(500).json({ error: error.message });
  }
}
