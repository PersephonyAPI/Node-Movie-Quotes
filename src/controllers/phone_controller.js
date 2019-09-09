const Persy = require("../lib/persy");
const Movies = require("../lib/movies");

const phoneCall = async (req, res, next) => {
  try {
    let persephonySDK = Persy.sdkInit();
    let promise = Movies.retrieveQuotes;

    promise.then(() => {
      const say = persephonySDK.percl.say(Movies.randomQuote());

      const say2 = persephonySDK.percl.say(
        "Thank you for calling the Movie Quote Hotline. Good Bye"
      );
      const hangup = persephonySDK.percl.hangup();

      res.status(200).json(persephonySDK.percl.build(say, say2, hangup));
    });
  } catch (e) {
    console.log(e.message);
    res.status(500).send();
  }
};

module.exports = {
  phoneCall
};
