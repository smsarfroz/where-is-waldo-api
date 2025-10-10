import prisma from './prisma/queries.js';

/*
Minotaur - 94.66 , 7
 */
async function main() {
    // const character1 = prisma.addNewCharacter(0, 0, 94.66, 7)
    // console.log('character1 ', character1);

    
    const setting1 = prisma.addSetting(1, "Ancient Greece and Mythology -  Gio Calistro", 
        "/settings/set1.jpeg",
        "Hard",
        "https://www.reddit.com/r/wimmelbilder/comments/1dexkvw/inspired_by_ancient_greece_and_mythology_by_me/"
    );

    const setting2 = prisma.addSetting(2, "Sinister Citadel - By Zurgetron", 
        "/settings/set2.png",
        "Hard",
        "https://www.reddit.com/r/wimmelbilder/comments/1kuje3y/sinister_citadel_digital_by_me/#lightbox"
    );
    
    const setting3 = prisma.addSetting(3, "The Simpsons Tree House of Horror #4 - Darrow Pinup",
        "/settings/set3.jpeg",
        "Medium",
        "https://www.reddit.com/r/wimmelbilder/comments/1m9bkds/geof_darrow_pinup_in_the_simpsons_tree_house_of/"
    );

    const setting4 = prisma.addSetting(4, "Where's Waldo?",
        "/settings/set4.jpeg",
        "Hard",
        "https://imgur.com/gallery/lets-play-some-wheres-waldo-8exqx"
    );

    console.log(setting1, setting2, setting3, setting4);
    

    
    //setting1
    {
        const character1 = prisma.addNewCharacter(1, 1, "Archer Lady", "/icons/set1/archer-lady.png");
        const character2 = prisma.addNewCharacter(1, 2, "Ciclop", "/icons/set1/ciclop.png");
        const character3 = prisma.addNewCharacter(1, 3, "Medusa", "/icons/set1/medusa.png");
        const character4 = prisma.addNewCharacter(1, 4, "Minotaur", "/icons/set1/minotaur.png");
        const character5 = prisma.addNewCharacter(1, 5, "Poseidon", "/icons/set1/poseidon.png");
        const character6 = prisma.addNewCharacter(1, 6, "Zeus", "/icons/set1/zeus.png");
        // console.log(character1, character2, character3, character4, character5, character6);
    }

    //setting2 
    {
        const character1 = prisma.addNewCharacter(2, 1, "Big Frog", "/icons/set2/big-frog.png");
        const character2 = prisma.addNewCharacter(2, 2, "Burning Skull", "/icons/set2/burning-skull.png");
        const character3 = prisma.addNewCharacter(2, 3, "Butt Pic", "/icons/set2/butt-pic.png");
        const character4 = prisma.addNewCharacter(2, 4, "Fish head", "/icons/set2/fish-head.png");
        const character5 = prisma.addNewCharacter(2, 5, "Green eye", "/icons/set2/green-eye.png");
        const character6 = prisma.addNewCharacter(2, 6, "Mutant Cheese", "/icons/set2/mutant-cheese.png");
        const character7 = prisma.addNewCharacter(2, 7, "Nudist Magician", "/icons/set2/nudist-magician.png");
        const character8 = prisma.addNewCharacter(2, 8, "Owl", "/icons/set2/owl.png");
        const character9 = prisma.addNewCharacter(2, 9, "Shining eye", "/icons/set2/shining-eye.png");
    }

    //setting3 
    {
        const character1 = prisma.addNewCharacter(3, 1, "Apu", "/icons/set3/apu.jpeg");
        const character2 = prisma.addNewCharacter(3, 2, "Gabbo", "/icons/set3/gabbo.jpeg");
        const character3 = prisma.addNewCharacter(3, 3, "Grampa Abe", "/icons/set3/grampa_abe.jpeg");
        const character4 = prisma.addNewCharacter(3, 4, "Kent Brockman", "/icons/set3/kent-brockman.jpeg");
        const character5 = prisma.addNewCharacter(3, 5, "Lenny", "/icons/set3/lenny.jpeg");
        const character6 = prisma.addNewCharacter(3, 6, "Maggie", "/icons/set3/maggie.jpeg");
        const character7 = prisma.addNewCharacter(3, 7, "Mayor Quimby", "/icons/set3/mayor_quimby.jpeg");
    }

    //setting4 
    {
        const character1 = prisma.addNewCharacter(4, 1, "Odlaw", "/icons/set4/odlaw.jpeg");
        const character2 = prisma.addNewCharacter(4, 2, "Waldo", "/icons/set4/waldo.jpeg");
        const character3 = prisma.addNewCharacter(4, 3, "Wenda", "/icons/set4/wenda.jpeg");
    }
    
}

main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })