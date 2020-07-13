const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Recieve events from event bus
app.post("/events", async (req, res) => {
  // TODO
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
