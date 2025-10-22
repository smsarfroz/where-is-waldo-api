import { Router } from "express";
import getAllLeaderboards from "../controllers/getAllLeaderboards.js";

const leaderboardRouter = Router({ mergeParams: true });

leaderboardRouter.get("/", getAllLeaderboards);

export default leaderboardRouter;