import request from 'supertest';
import express from 'express';
import cors from 'cors';

function makeApp(){
    const app = express();
    app.use(cors());
    app.get('/api/hello', (req, res) => res.json({ message: 'Hello from Express API 👋' }));
    return app;
}

describe('GET /api/hello', () => {
    it('returns greeting', async () => {
        const app = makeApp();
        const res = await request(app).get('/api/hello');
        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Hello from Express API 👋' });
    });
});