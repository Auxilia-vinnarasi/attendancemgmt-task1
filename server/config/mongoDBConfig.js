import mongoose from "mongoose";

//var MONGO_URI="mongodb+srv://auxilia1:auxilia1234@cluster0.bg8rf.mongodb.net/mern-attend"

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      //useFindAndModify: false,
     //useCreateIndex: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;