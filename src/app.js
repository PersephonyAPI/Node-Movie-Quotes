const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("App is working"));

app.use("/api", routes);

app.listen(port, () => {
  console.log("Express server listening on port " + port);
});

module.exports = {
  app
};
