import { Router } from "express";
import getAllCharacters from "../controllers/getAllCharacters.js";

const characterRouter = Router({ mergeParams: true });

characterRouter.get("/", getAllCharacters);

export default characterRouter;