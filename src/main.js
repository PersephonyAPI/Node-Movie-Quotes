const QuoteBroker = require("./lib/quote_broker");
const Movies = require("./lib/movies");

let deliveryType = process.argv[2];
let destinations = process.argv[3];

let promise = Movies.retrieveQuotes;

promise.then(() => {
  QuoteBroker.send(deliveryType, destinations, Movies.randomQuote());
});
