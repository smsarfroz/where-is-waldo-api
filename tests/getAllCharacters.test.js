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
        .expect({})
        .expect(200, done)
});