const MongoClient = require("mongodb").MongoClient

//Create a MongoDB client, open a connection to Amazon DocumentDB as a replica set,
//  and specify the read preference as secondary preferred
const connectDB = async () => {
  const connection = await MongoClient.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
