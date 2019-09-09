const persephonySDK = require("@persephony/sdk");
const dotenv = require("dotenv");

dotenv.config();
const accountId = process.env.ACCOUNT_ID;
const authToken = process.env.AUTH_TOKEN;
const persephonyClient = persephonySDK(accountId, authToken);

const sdkInit = () => {
  return persephonyClient;
};

module.exports = {
  sdkInit
};
