import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL;

    const connection = await mongoose.connect(mongoUrl);
    // await mongoose.connect(mongoUrl);
    console.log('✅ MongoDB connection established successfully');

    console.log(`✅ Connected to database: ${connection.connection.name}`);
  } catch (error) {
    console.error('❌ Failed to connect to MongoDB:', error.message);
    process.exit(1);
  }
};
