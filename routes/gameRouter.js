import { Router } from "express";
import verifyCharacter from "../controllers/verifyCharacter.js";

const gameRouter = Router({ mergeParams: true });

// gameRouter.get("/:settingid", );
gameRouter.post("/:settingid/verify/:charid", verifyCharacter);

export default gameRouter;