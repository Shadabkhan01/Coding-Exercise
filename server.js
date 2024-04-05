const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 8080;
const fizzBuzz = require("./index");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/fizzbuzz", (req, res) => {
  try {
    const reqBody = req.body;
    if (!reqBody.data || !reqBody.data.length) {
      res.status(400).send({
        message: "Invalid data",
      });
    } else {
      const data = fizzBuzz.fizzBuzz(reqBody.data);
      res.status(200).send(data);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});
app.listen(PORT, () => {
  console.log("Server started", PORT);
});
