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
        "Medium",
        "https://imgur.com/gallery/lets-play-some-wheres-waldo-8exqx"
    );

    console.log(setting1, setting2, setting3, setting4);
    

    
    //setting1
    {
        const character1 = prisma.addNewCharacter(1, 1, "Archer Lady", "/icons/set1/archer-lady.png" ,26.402050009621032, 26.13895344901505);
        const character2 = prisma.addNewCharacter(1, 2, "Ciclop", "/icons/set1/ciclop.png" ,36.42482905290122, 17.618521109280863);
        const character3 = prisma.addNewCharacter(1, 3, "Medusa", "/icons/set1/medusa.png",13.00797256087388, 22.81742897759325);
        const character4 = prisma.addNewCharacter(1, 4, "Minotaur", "/icons/set1/minotaur.png",94.73917985016773, 5.920978405577995);
        const character5 = prisma.addNewCharacter(1, 5, "Poseidon", "/icons/set1/poseidon.png",85.71867871121557, 87.83266026316792);
        const character6 = prisma.addNewCharacter(1, 6, "Zeus", "/icons/set1/zeus.png",59.568337025566365, 6.787463050296726);
        // console.log(character1, character2, character3, character4, character5, character6);
    }

    //setting2 
    {
        const character1 = prisma.addNewCharacter(2, 1, "Big Frog", "/icons/set2/big-frog.png",8.452163904837432, 82.25714135813072);
        const character2 = prisma.addNewCharacter(2, 2, "Burning Skull", "/icons/set2/burning-skull.png",69.95558076132946, 43.19244664110464);
        const character3 = prisma.addNewCharacter(2, 3, "Butt Pic", "/icons/set2/butt-pic.png",42.347380305748594, 94.66876395614929);
        const character4 = prisma.addNewCharacter(2, 4, "Fish head", "/icons/set2/fish-head.png",24.488610374085724, 65.90217068335956);
        const character5 = prisma.addNewCharacter(2, 5, "Green eye", "/icons/set2/green-eye.png",89.54555798228618, 24.184933176710476);
        const character6 = prisma.addNewCharacter(2, 6, "Mutant Cheese", "/icons/set2/mutant-cheese.png",59.47722085244563, 36.71003335883303);
        const character7 = prisma.addNewCharacter(2, 7, "Nudist Magician", "/icons/set2/nudist-magician.png",28.22437347203561, 36.95117356324387);
        const character8 = prisma.addNewCharacter(2, 8, "Owl", "/icons/set2/owl.png",60.11503406429074, 3.120636538930384);
        const character9 = prisma.addNewCharacter(2, 9, "Shining eye", "/icons/set2/shining-eye.png",66.67539852898322, 61.079368759558065);
    }

    //setting3 
    {
        const character1 = prisma.addNewCharacter(3, 1, "Apu", "/icons/set3/apu.jpeg",38.33826868843652, 60.388154036773614);
        const character2 = prisma.addNewCharacter(3, 2, "Gabbo", "/icons/set3/gabbo.jpeg",40.980637708937664, 85.42074947033899);
        const character3 = prisma.addNewCharacter(3, 3, "Grampa Abe", "/icons/set3/grampa_abe.jpeg",20.66173110301511, 43.032222015272865);
        const character4 = prisma.addNewCharacter(3, 4, "Kent Brockman", "/icons/set3/kent-brockman.jpeg",24.12414568160281, 10.609051964984168);
        const character5 = prisma.addNewCharacter(3, 5, "Lenny", "/icons/set3/lenny.jpeg",61.664009007343125, 73.26206070148072);
        const character6 = prisma.addNewCharacter(3, 6, "Maggie", "/icons/set3/maggie.jpeg",69.95558076132946, 42.55541069100391);
        const character7 = prisma.addNewCharacter(3, 7, "Mayor Quimby", "/icons/set3/mayor_quimby.jpeg",14.192482811443355, 37.90650027938163);
    }

    //setting4 
    {
        const character1 = prisma.addNewCharacter(4, 1, "Odlaw", "/icons/set4/odlaw.jpeg",19.93280171804928, 72.47853955742791);
        const character2 = prisma.addNewCharacter(4, 2, "Waldo", "/icons/set4/waldo.jpeg",42.25626413262786, 17.539806572897557);
        const character3 = prisma.addNewCharacter(4, 3, "Wenda", "/icons/set4/wenda.jpeg",29.955580761329458, 73.34828203211705);
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