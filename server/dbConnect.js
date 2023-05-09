const mongoose = require('mongoose');

const Connectdb = async (url) => {
   try {
      await mongoose.connect(url);
      console.log("Connected to db")
   } catch (err) {
      console.log(err)
   }

}


module.exports = Connectdb;