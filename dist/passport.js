"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const co_passport = require("passport");
co_passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ["profile", "email"],
}, function (accessToken, refreshToken, profile, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        yield callback(null, profile);
    });
}));
co_passport.serializeUser((user, done) => __awaiter(void 0, void 0, void 0, function* () {
    yield done(null, user);
}));
co_passport.deserializeUser((user, done) => __awaiter(void 0, void 0, void 0, function* () {
    yield done(null, user);
}));
