const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://SingingApple:20112001honey@cluster0-gu2qa.mongodb.net/Blog2?retryWrites=true&w=majority",
      { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
      () => {
        console.log("Mongo Connected");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectdb;
