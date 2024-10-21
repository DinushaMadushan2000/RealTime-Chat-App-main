const mongoose = require("mongoose");

const mongoUri = "mongodb+srv://dinushamadushan491:<db_password>@cluster05.d0xt8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster05";

mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  });