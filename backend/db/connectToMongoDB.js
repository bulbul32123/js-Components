const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);  // Exit if connection fails
    }
};

module.exports = connectToMongoDB;
