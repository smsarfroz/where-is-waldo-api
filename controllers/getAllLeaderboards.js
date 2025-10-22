import prisma from "../prisma/queries.js";

const getAllLeaderboards = async(req, res) => {
    try {   
        const Leaderboards = [];

        const row1 = await prisma.getLeaderboardforSetting("Sinister Citadel - By Zurgetron");        
        const row2 = await prisma.getLeaderboardforSetting("Ancient Greece and Mythology -  Gio Calistro");        
        const row3 = await prisma.getLeaderboardforSetting("The Simpsons Tree House of Horror #4 - Darrow Pinup");        
        const row4 = await prisma.getLeaderboardforSetting("Where's Waldo?");        
        
        Leaderboards.push({name: "Sinister Citadel - By Zurgetron", array: row1});
        Leaderboards.push({name: "Ancient Greece and Mythology -  Gio Calistro", array: row2});
        Leaderboards.push({name: "The Simpsons Tree House of Horror #4 - Darrow Pinup", array: row3});
        Leaderboards.push({name: "Where's Waldo?", array: row4});
        
        return res.json(Leaderboards);
    } catch (error) {
        console.error(error);
    }
};

export default getAllLeaderboards;