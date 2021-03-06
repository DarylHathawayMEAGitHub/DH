const request = require('supertest');
const app = require('./app').app;
const build = require('./app').itemBuilder;

// unit testing the item builder
describe('Unit Tests', () => {

    test('item object builder', () => {
        expect(build('', '', '', ''))
        .toMatchObject(
            {}
        );
    });

});

describe('GET requests', () => {
    
    test('GET /read endpoint, expect 200', async () => {
        const res = await request(app).get('/read')
        expect(res.statusCode).toBe(200);
    });

    // time to create a bad endpoint test (404)
    test('GET /bad endpoint, expect 404', async () => {
        const res = await request(app).get('/bad')
        expect(res.statusCode).toBe(404);
    });

});

describe('CREATE request', () => {
   
    test('CREATE item test, expect 201', async () => {
        const res = await request(app)
                            .post('/create')
                            .send({
                                name : "test item",
                                description : "test description",
                                price : 99
                            });
        expect(res.statusCode).toBe(201);
    });
});