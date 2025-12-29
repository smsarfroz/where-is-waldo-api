import express from 'express';
import request from "supertest";
import gameRouter from '../routes/gameRouter.js';

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/settings", gameRouter);

jest.mock('../prisma/queries.js', () => ({
    getAllSettings: jest.fn()
}));

import prisma from "../prisma/queries.js";

describe('GET /settings', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('should return all settings successfully', async () => {
        const mockSetting1 = [
            {id : 1, settingName: 'set1', imglocation: 'img1'}
        ];

        prisma.getAllSettings
            .mockResolvedValueOnce(mockSetting1)

        const response = await request(app)
            .get('/settings')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual(
            mockSetting1 
        );
    });
})