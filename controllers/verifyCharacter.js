import prisma from "../prisma/queries.js";

/*
94.5, 7.429
94.67, 5.857

0.0289 , 1.572
 */

const radiusSquared = 2.4725;
const verifyCharacter = async (req, res) => {
  try {
    const { settingid, charid } = req.params;
    const sid = parseInt(settingid);
    const cid = parseInt(charid);

    const { option, xpercentu, ypercentu } = req.body;
    // console.log("sid, cid ", sid, cid);
    // console.log("req.body ", req.body);

    const ratios = await prisma.getRatios(sid, cid);
    // console.log("ratios ", ratios);
    const { xpercent, ypercent } = ratios;
    const distanceSquared =
      Math.abs(xpercent - xpercentu) * Math.abs(xpercent - xpercentu) +
      Math.abs(ypercent - ypercentu) * Math.abs(ypercent - ypercentu);

    // console.log("distance squared ", distanceSquared, radiusSquared);

    if (distanceSquared <= radiusSquared) {
        res.json({ message: 'Success'});
    } else {
        res.json({ message: 'Sorry, that not the character'})
    }
  } catch (error) {
    console.error(error);
  }
};

export default verifyCharacter;
