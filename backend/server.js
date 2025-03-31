const express = require('express');
const connectToMongoDB = require('./db/connectToMongoDB');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectToMongoDB();

// Middleware
app.use(express.json());

// Route: /api/testing
app.get('/api/testing', (req, res) => {
    res.json({ message: "Api is working" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
