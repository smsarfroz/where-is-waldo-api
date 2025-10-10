import { Router } from "express";
import verifyCharacter from "../controllers/verifyCharacter.js";
import getAllSettings from "../controllers/getAllSettings.js";

const gameRouter = Router({ mergeParams: true });

// gameRouter.get("/:settingid", );
gameRouter.post("/:settingid/verify/:charid", verifyCharacter);

gameRouter.get("/", getAllSettings);

export default gameRouter;