import leaderboardRouter from "../routes/leaderboardRouter.js";
import getAllLeaderboards from "../controllers/getAllLeaderboards.js";
import express from 'express';
import request from "supertest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/leaderboard", leaderboardRouter);

jest.mock('../prisma/queries.js', () => ({
    getLeaderboardforSetting: jest.fn()
}));

import prisma from "../prisma/queries.js";

describe('GET /leaderboards', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should return all leaderboards successfully', async () => {
        const mockRow1 = [
            { id: 1, playerName: 'Player1', time: 120 },
            { id: 2, playerName: 'Player2', time: 150 }
        ]

        const mockRow2 = [
            { id: 3, playerName: 'Player3', time: 180 }
        ]

        const mockRow3 = [
            { id: 4, playerName: 'Player4', time: 90 },
            { id: 5, playerName: 'Player5', time: 200 }
        ]

        const mockRow4 = [
            { id: 6, playerName: 'Player6', time: 160 }
        ]

        prisma.getLeaderboardforSetting
            .mockResolvedValueOnce(mockRow1)
            .mockResolvedValueOnce(mockRow2)
            .mockResolvedValueOnce(mockRow3)
            .mockResolvedValueOnce(mockRow4);
        
        const response = await request(app)
            .get('/leaderboard')
            .expect('Content-Type', /json/)
            .expect(200);

        expect(response.body).toEqual([
            {
                name: "Sinister Citadel - By Zurgetron",
                array: mockRow1
            },
            {
                name: "Ancient Greece and Mythology -  Gio Calistro",
                array: mockRow2
            },
            {
                name: "The Simpsons Tree House of Horror #4 - Darrow Pinup",
                array: mockRow3
            },
            {
                name: "Where's Waldo?",
                array: mockRow4
            }
        ]);

        expect(prisma.getLeaderboardforSetting).toHaveBeenCalledTimes(4);
        expect(prisma.getLeaderboardforSetting).toHaveBeenNthCalledWith(
            1,
            "Sinister Citadel - By Zurgetron"
        );
        expect(prisma.getLeaderboardforSetting).toHaveBeenNthCalledWith(
            2,
            "Ancient Greece and Mythology -  Gio Calistro"
        );
        expect(prisma.getLeaderboardforSetting).toHaveBeenNthCalledWith(
            3,
            "The Simpsons Tree House of Horror #4 - Darrow Pinup"
        );
        expect(prisma.getLeaderboardforSetting).toHaveBeenNthCalledWith(
            4,
            "Where's Waldo?"
        );
    });

    test('should handle empty leaderboards', async () => {
        prisma.getLeaderboardforSetting
            .mockResolvedValueOnce([])
            .mockResolvedValueOnce([])
            .mockResolvedValueOnce([])
            .mockResolvedValueOnce([]);

        const response = await request(app)
            .get('/leaderboard')
            .expect(200);
        
        expect(response.body).toEqual([
            {
                name: "Sinister Citadel - By Zurgetron",
                array: []
            },
            {
                name: "Ancient Greece and Mythology -  Gio Calistro",
                array: []
            },
            {
                name: "The Simpsons Tree House of Horror #4 - Darrow Pinup",
                array: []
            },
            {
                name: "Where's Waldo?",
                array: []
            }
        ]);
    });

    test('should handle database errors', async () => {
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        prisma.getLeaderboardforSetting.mockRejectedValueOnce(
            new Error('Database connection failed')
        );

        const response = await request(app)
            .get('/leaderboard')
            .expect(500);

        expect(response.body.error).toBe('Failed to fetch leaderboards');

        consoleErrorSpy.mockRestore();
    });
});

// test("getAllLeaderboards controller works", done => {
//     request(app)
//         .get("/leaderboard")
//         .expect("Content-Type", /json/)
//         .expect(["random"])
//         .expect(200, done)
// });