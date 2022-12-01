"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const passport = require("passport");
const connection = require('./db');
const cookieSession = require("cookie-session");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const authRouteG = require("./routes/authPs");
const checkout = require("./routes/checkout");
const passportStrategy = require("./passport");
const router = require("express").Router();
connection();
app.use(cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
}));
app.use(passport.initialize());
app.use(passport.session());
//middlewares
app.use(express.json());
app.use(cors({
    origin: process.env.URL || "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/auth", authRouteG);
app.use("/checkout", checkout);
router.get('/', (req, res) => {
    return res.send('hola');
});
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Server run on port ' + port));
