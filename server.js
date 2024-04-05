const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8080;
const fizzBuzz = require("./index");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/fizzbuzz", (req, res) => {
  const reqBody = req.body;
  if (!reqBody.data || !reqBody.data.length) {
    res.status(200).send({
      message: "Invalid data",
    });
  } else {
    const data = fizzBuzz.fizzBuzz(reqBody.data);
    res.status(200).send(data);
  }
});
app.listen(PORT, () => {
  console.log("Server started", PORT);
});
