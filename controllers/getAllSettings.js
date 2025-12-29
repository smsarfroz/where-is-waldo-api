import prisma from "../prisma/queries.js";

const getAllSettings = async(req, res) => {
    try {   
        const settings = await prisma.getAllSettings();

        return res.json(settings);
                
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Failed to fetch settings' });
    }
};

export default getAllSettings;