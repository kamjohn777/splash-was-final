require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static('../dist'));
app.use(express.static('../dist/CSS'));
// app.use(express.static('../dist/Payments.html'));
app.use(cors({
    origin: "http://localhost:5502"
}));

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const washingPackages = new Map([
    [1, {priceInCents: 10000, name: 'Basic Wash'}],
    [2, {priceInCents: 20000, name: 'delux Wash'}],
])

app.post('/create-checkout-session', async (req, res) => {
    try {
        const { price } = req.body;

        console.log('req.body.items:', req.body.items);
       const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items:
            req.body.items.map(item => {
                const washingPackageItems = washingPackages.get(item.id);
                return {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: washingPackageItems.name,
                        },
                        unit_amount: price,
                    },
                    quantity: item.quantity,
                };
            }),
        success_url: `${process.env.CLIENT_URL}/success.html`,
        cancel_url: `${process.env.CLIENT_URL}/dist/Payments.html`, 
       })
       console.log('session:', session);
        res.json({ url: session.url })
    } catch (error) {
        console.error('Error creating Stripe session:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
    // res.json({ url: 'hello' })
})

app.listen(3000)