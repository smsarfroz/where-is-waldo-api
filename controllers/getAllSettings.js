import prisma from "../prisma/queries.js";

const getAllSettings = async(req, res) => {
    try {   
        const settings = await prisma.getAllSettings();

        return res.json(settings);
                
    } catch (error) {
        console.error(error);
    }
};

export default getAllSettings;