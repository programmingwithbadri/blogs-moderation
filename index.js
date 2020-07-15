const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// Recieve events from event bus
app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  // if event type is commentcreated check if the comment has word "Orange"
  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    // Emit the new event to event bus that the comment is moderated and the status is updated
    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
