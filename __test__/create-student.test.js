const request = require('supertest')
const app = require('../app')

let token = '';

// beforeAll(async () => {
//     const response = await request(app).post('/api/v1/auth/signing').send({
//         password:'admin12'
//     });
//     expect(response.status).toEqual(400)
// });

describe('create new student', () => {
    it('return bad request if user not authenticated', async () => {
        const respond = await request(app).post('/api/v1/admin').send({
            email:'asd@gmail.com'
        })
        expect(respond.status).toEqual(401)
    })
})
