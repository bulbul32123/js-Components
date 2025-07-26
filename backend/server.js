const express = require('express');
require('dotenv').config();
const { connectToMongoDB } = require('./db/connectToMongoDB')
const app = express();
const PORT = process.env.PORT || 5000;

connectToMongoDB();

app.use(express.json());

app.get('/api/testing', (req, res) => {
    res.json({ message: "Api is working" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
