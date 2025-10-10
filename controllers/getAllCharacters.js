import prisma from "../prisma/queries.js";

const getAllCharacters = async(req, res) => {
    try {   
        const characters = await prisma.getAllCharacters();

        return res.json(characters);
                
    } catch (error) {
        console.error(error);
    }
};

export default getAllCharacters;