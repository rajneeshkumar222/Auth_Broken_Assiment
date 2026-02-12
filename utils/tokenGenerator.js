const crypto = require("crypto");
const { getSecretFromDB } = require("./mockDb");

const generateToken = async (email) => {
  try {
    const secret = await getSecretFromDB();

    return crypto
      .createHmac("sha256", secret)
      .update(email)
      .digest("base64");
  } catch (error) {
    //  missing catch block fill Sir , so it can throw the possible error 
    console.error("Token generation error:", error.message);
    throw error; 
  }
};

module.exports = { generateToken };
