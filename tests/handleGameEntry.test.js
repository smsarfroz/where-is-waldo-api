import express from 'express';
import request from "supertest";
import handleGameEntry from '../controllers/handleGameEntry.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post("/settings/:settingid/leaderboard", handleGameEntry);

jest.mock('../prisma/queries.js', () => ({
    addnewRowinLeaderboard: jest.fn()
}));

import prisma from "../prisma/queries.js";

describe('POST /settings/:settingid/leaderboard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('should successfully add game entry', async () => {
        prisma.addnewRowinLeaderboard.mockResolvedValue({
            id: 1,
            userName: 'testUser',
            timeTaken: 120,
            settingName: 'Test Setting'
        });

        const settingId = 1;
        const requestBody = {
            userName: 'testUser',
            timeTaken: 120,
            settingName: 'Test Setting'
        }

        const response = await request(app)
            .post(`/settings/${settingId}/leaderboard`)
            .send(requestBody)
            .expect("Content-Type", /json/)
            .expect(200);

        expect(response.body).toEqual({
            message: 'successfully added to the Leaderboards!'
        });

        expect(prisma.addnewRowinLeaderboard).toHaveBeenCalledTimes(1);
        expect(prisma.addnewRowinLeaderboard).toHaveBeenCalledWith(
            'testUser',
            120,
            'Test Setting'
        );
    });
})