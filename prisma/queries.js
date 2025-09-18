import { PrismaClient } from "../generated/prisma/index.js";
const prisma = new PrismaClient();

async function addNewCharacter(settingid, charid, xpercent, ypercent) {
    try {
        const character = await prisma.Ratios.create({
            data: {
                settingid: settingid,
                charid: charid,
                xpercent: xpercent,
                ypercent: ypercent
            }
        })
        return character;
    } catch (error) {
        console.error(error);
    }
}

async function getRatios(settingid, charid) {
    try {   
        const ratios = await prisma.Ratios.findFirst({
            where: {
                settingid: settingid,
                charid: charid
            },
            select: {
                xpercent: true,
                ypercent: true
            }
        })
        return ratios;
    } catch (error) {
        console.error(error);
    }
}

async function addSetting(name, imglocation, difficulty, credits) {
    try {
        const setting = await prisma.Settings.create({
            data: {
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
export default {
    addNewCharacter,
    getRatios,
    addSetting
}