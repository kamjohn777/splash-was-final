require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(express.static('../dist'));
app.use(express.static('../dist/CSS'));
const path = require('path');
// app.use(express.static('../dist/Payments.html'));
// app.use(cors({
//     origin: "http://localhost:5502"
//     origin: "http://127.0.0.1:5502"
// }));
app.use(cors({
    origin: function (origin, callback) {
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        const allowedOrigins = ["http://localhost:5502", "http://127.0.0.1:5502"];
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                      'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.get('/payments', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'Payments.html'));
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
        // success_url: `${process.env.CLIENT_URL}/dist/Home.html`,
        success_url: `${process.env.CLIENT_URL}/dist/Home.html?payment=success`,
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