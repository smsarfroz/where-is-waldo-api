import { PrismaClient } from "../generated/prisma/index.js";
// const prisma = new PrismaClient();

const databaseUrl = process.env.NODE_ENV === 'test'
  ? process.env.TEST_DATABASE_URL
  : process.env.DATABASE_URL;

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseUrl,
    },
  },
});

async function addNewCharacter(settingid, charid, charname, imglocation, xpercent, ypercent) {
    try {
        const character = await prisma.Characters.create({
            data: {
                settingid: settingid,
                charid: charid,
                charname: charname,
                imglocation: imglocation,
                xpercent: xpercent,
                ypercent: ypercent
            }
        })
        return character;
    } catch (error) {
        console.error(error);
    }
}

async function getAllCharacters() {
    try {   
        const characters = await prisma.Characters.findMany();
        return characters;
    } catch (error) {
        console.error(error);
    }
}

async function getRatios(settingid, charid) {
    try {   
        const ratios = await prisma.Characters.findFirst({
            where: {
                settingid: settingid,
                charid: charid
            },
            select: {
                xpercent: true,
                ypercent: true
            }
        });
        return ratios;
    } catch (error) {
        console.error(error);
    }
}

async function addSetting(settingid, name, imglocation, difficulty, credits) {
    try {
        const setting = await prisma.Settings.create({
            data: {
                settingid: settingid,
                name: name,
                imglocation: imglocation,
                difficulty: difficulty,
                credits: credits
            }
        });
        return setting;
    } catch (error) {
        console.error(error);
    }
}

async function getAllSettings() {
    try {
        const settings = await prisma.Settings.findMany();

        return settings; 
    } catch (error) {
        console.error(error);
    }
}

async function getLeaderboardforSetting(settingName) {
    try {
        const rows = await prisma.Leaderboards.findMany({
            where: {
                settingName: settingName
            }, 
            orderBy: {
                timeTaken: 'asc'
            }
        });
        return rows;
    } catch (error) {
        console.error(error);
    }
}

async function addnewRowinLeaderboard(userName, timeTaken, settingName) {
    try {
        const row = await prisma.Leaderboards.create({
            data: {
                userName: userName,
                timeTaken: timeTaken,
                settingName: settingName
            }
        })
        return row;
    } catch (error) {
        console.error(error);
    }
}


export default {
    addNewCharacter,
    getAllCharacters,
    addSetting,
    getAllSettings,
    getRatios,
    getLeaderboardforSetting,
    addnewRowinLeaderboard,
}