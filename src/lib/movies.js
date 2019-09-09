const csvParser = require("csv-parse");
const fs = require("fs");

var numMovies = 30;
var movies = new Array();

const retrieveQuotes = new Promise((resolve, reject) => {
  let fileName = "./src/lib/movies.csv";
  try {
    let i = 0;
    fs.createReadStream(fileName)
      .pipe(csvParser({ delimiter: ";" }))
      .on("data", row => {
        movies[i] = {
          quote: row[0],
          name: row[1],
          year: row[2]
        };
        i++;
      })
      .on("end", () => {
        numMovies = movies.length;
        resolve();
      });
  } catch (err) {
    reject(err);
  }
});

const randomQuote = () => {
  let num = randomIndex();
  return "The random quote: " + movies[num].quote;
};

const randomIndex = () => {
  return Math.round(Math.random() * 100) % numMovies;
};

module.exports = { retrieveQuotes, randomQuote };
