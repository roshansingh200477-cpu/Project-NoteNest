const mongoose = require('mongoose');

const mongoUrl = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.connect(mongoUrl)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err.message));
};

module.exports = connectToMongo;