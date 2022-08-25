/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LZMtxLL5LVXIliA1rWURELZV6GD4GKc7h0nBDGR3IyUbQrRApxH4S4wF27UszLXCLGOrMCreB2RQ81sxtKE1Y9n00NOSui3GK");

// App config
const app = express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("GOT A REQUEST");
  console.log(total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201 = Payment Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// listen
exports.api = functions.https.onRequest(app);

/* http://localhost:5001/clone-946c0/us-central1/api */
