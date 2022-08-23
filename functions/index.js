/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LZMtxLL5LVXIliA1rWURELZV6GD4GKc7h0nBDGR3IyUbQrRApxH4S4wF27UszLXCLGOrMCreB2RQ81sxtKE1Y9n00NOSui3GK");

// API

// App config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
  const total = request.query.total;
  console.log('Payment request recieved. For this amount >> ' total)
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd"
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
    
  }) //okay, created
});

// Listen
exports.api = functions.https.onRequest(app);

/* http://localhost:5001/clone-946c0/us-central1/api */
