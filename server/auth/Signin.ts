import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Express server!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});