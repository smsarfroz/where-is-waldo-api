// const getAllCharacters = require("../controllers/getAllCharacters.js");
// const characterRouter = require("../routes/characterRouter.js");

// const request = require("supertest");
// const express = require("express");

import characterRouter from "../routes/characterRouter.js";
import express from 'express';
import request from "supertest";

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/characters", characterRouter);

test("getAllCharacters controller works", done => {
    request(app)
        .get("/characters")
        .expect("Content-Type", /json/)
        .expect([
            {
                id: 1,
                settingid: 1,
                charid: 1,
                charname: 'Archer Lady',
                imglocation: '/icons/set1/archer-lady.png',
                xpercent: 26.40205000962103,
                ypercent: 26.13895344901505
            }
        ])
        .expect(200, done)
});