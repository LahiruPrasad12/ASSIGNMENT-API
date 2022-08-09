const request = require("supertest");
const app = require("../app");

describe('log in user', () => {
    it('return bad request if user not provide email or password', async () => {
        const respond = await request(app).post('/api/v1/auth/signing').send({
            email:'asd@gmail.com'
        })
        expect(respond.status).toEqual(400)
    });

    it('return bad request if user not provide correct email or password', async () => {
        const respond = await request(app).post('/api/v1/auth/signing').send({
            email:'admin@gmail.com',
            password:'admin123'
        })
        expect(respond.status).toEqual(500)
    },70000)
})