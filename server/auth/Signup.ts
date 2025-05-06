import express from 'express';
import cors from 'cors';
import * as z from "zod"
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Example route
app.post('/signup', (req, res) => {
    const { username, password } = req.body;
    // Handle signup logic here
    res.status(201).json({ message: 'User signed up successfully!' });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});