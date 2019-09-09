// const { Request, Response } = require("express");
const QuoteBroker = require("../lib/quote_broker");
const Movies = require("../lib/movies");

const inboundMessage = async (req, res) => {
  try {
    let destination = req.body.from;
    let promise = Movies.retrieveQuotes;

    promise.then(() => {
      QuoteBroker.send("text", destination, Movies.randomQuote());
    });

    res.status(200).send({
      message: "Sent a funny quote back to the user!"
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
};

module.exports = {
  inboundMessage
};
