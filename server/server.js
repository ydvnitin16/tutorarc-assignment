import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import LiveSession from './models/session.js';
import cors from 'cors';

dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(cors({ origin: `${process.env.CLIENT_DOMAIN}` }));

// Create session by admin
app.post('/api/session/admin', async (req, res) => {
    const randomUniqueId = Math.floor(Math.random() * 100000);
    const userUrl = `${process.env.CLIENT_DOMAIN}/session/${randomUniqueId}`;
    try {
        const session = await LiveSession.create({
            type: 'admin',
            uniqueId: randomUniqueId,
            userUrl: userUrl,
        });
        await session.save();
        res.status(201).json({ message: 'Session created', session });
    } catch (err) {
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

app.get('/api/session/:uniqueId', async (req, res) => {
    const { uniqueId } = req.params;
    try {
        const session = await LiveSession.findOne({ uniqueId: uniqueId });
        if (!session) {
            return res.status(404).json({ message: 'Session not found.' });
        }
        res.status(200).json({ message: 'Session Fetched', session });
    } catch (err) {
        res.status(500).json({ message: err.message || 'Server Error' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}`)
);
