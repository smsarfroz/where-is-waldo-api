import express from 'express';
import request from "supertest";
import verifyCharacter from '../controllers/verifyCharacter.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/settings/:settingid/verify/:charid", verifyCharacter);

jest.mock('../prisma/queries.js', () => ({
    getRatios: jest.fn()
}));

import prisma from "../prisma/queries.js";

describe('POST /settings/:settingid/verify/:charid', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
    
    test('should return success when coordinates are within raidus', async () => {
        prisma.getRatios.mockResolvedValue({
            xpercent: 94.65,
            ypercent: 5.856
        });

        const requestBody = {
            option: 'waldo',
            xpercentu: 94.67,
            ypercentu: 5.857
        };

        const response = await request(app)
            .post('/settings/1/verify/2')
            .send(requestBody)
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual({ message: 'Success' });

        expect(prisma.getRatios).toHaveBeenCalledTimes(1);
        expect(prisma.getRatios).toHaveBeenCalledWith(1, 2);
    }); 
})