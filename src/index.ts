require('dotenv').config()
import {Request, Response } from "express"
const express = require('express')
const app = express()
const cors = require('cors')
const passport = require("passport");
const connection = require('./db')
const cookieSession = require("cookie-session");
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const authRouteG = require("./routes/authPs");
const checkout = require("./routes/checkout")
const passportStrategy = require("./passport");
const router = require("express").Router();


connection()




app.use(
	cookieSession({
		name: "session",
		keys: ["cyberwolve"],
		maxAge: 24 * 60 * 60 * 100,
	})
);

app.use(passport.initialize());
app.use(passport.session());

//middlewares
 
app.use(express.json())
app.use(
    cors({
		origin: process.env.URL ,
		methods: "GET,POST,PUT,DELETE",
		credentials: true,
	})
)

app.use(function(req:any, res:any, next:any) {
    res.header('Access-Control-Allow-Origin', 'https://e-commerce-1vo4.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' === req.method) {
      res.send(200);
    }
    else {
      next();
    }
});

// routes
app.use("/auth", authRouteG);
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)
app.use("/checkout", checkout)


const port = process.env.PORT || 8080

app.listen(port, () => console.log('Server run on port esooo' + port))