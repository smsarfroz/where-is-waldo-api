import prisma from "../prisma/queries.js";

const handleGameEntry = async(req, res) => {
    try {
        // console.log("req.params ", req.params);
        const { settingid } = req.params;
        const sid = parseInt(settingid);

        const { userName, timeTaken, settingName } = req.body;

        const row = await prisma.addnewRowinLeaderboard(userName, timeTaken, settingName);
        return res.json({message: 'successfully added to the Leaderboards!'});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to add to the Leaderboards' });
    }
};

export default handleGameEntry;

