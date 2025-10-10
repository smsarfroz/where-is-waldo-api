import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

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

export default {
    addNewCharacter,
    getAllCharacters,
    addSetting,
    getAllSettings
}