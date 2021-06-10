const mongoose = require('mongoose');


//MONGO_URI = 'mongodb+srv://TRI_222:TRI_222@cluster0.rstur.mongodb.net/devcamperapi?retryWrites=true&w=majority';
const connectDB = async () => {

    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true


    });

    console.log(`MongoDb connected :${conn.connection.host}`.underline.green.italic);
}

module.exports = connectDB;