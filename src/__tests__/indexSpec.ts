import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
describe('testing main route', () => {
    it('testing route',async () => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
    })
})
