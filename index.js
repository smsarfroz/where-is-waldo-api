import prisma from './prisma/queries.js';

/*
Minotaur - 94.66 , 7
 */
async function main() {
    // const character1 = prisma.addNewCharacter(0, 0, 94.66, 7)
    // console.log('character1 ', character1);

    const setting1 = prisma.addSetting("Ancient Greece and Mythology -  Gio Calistro", 
     "src/assets/settings/set1.jpeg",
     "Hard",
     "https://www.reddit.com/r/wimmelbilder/comments/1dexkvw/inspired_by_ancient_greece_and_mythology_by_me/"
    );

    const setting2 = prisma.addSetting("Sinister Citadel - By Zurgetron", 
        "src/assets/settings/set2.png",
        "Hard",
        "https://www.reddit.com/r/wimmelbilder/comments/1kuje3y/sinister_citadel_digital_by_me/#lightbox"
    );
    
    const setting3 = prisma.addSetting("The Simpsons Tree House of Horror #4 - Darrow Pinup",
        "src/assets/settings/set3.jpeg",
        "Medium",
        "https://www.reddit.com/r/wimmelbilder/comments/1m9bkds/geof_darrow_pinup_in_the_simpsons_tree_house_of/"
    );

    const setting4 = prisma.addSetting("Where's Waldo?",
        "src/assets/settings/set4.jpeg",
        "Hard",
        "https://imgur.com/gallery/lets-play-some-wheres-waldo-8exqx"
    );

    console.log(setting1, setting2, setting3, setting4);
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