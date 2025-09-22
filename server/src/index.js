import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express API 👋' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API listening on :${PORT}`));