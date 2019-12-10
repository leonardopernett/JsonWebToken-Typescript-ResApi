"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function signup(req, res) {
    //SAVE A USER 
    const newUser = new user_1.default(req.body);
    newUser.password = await newUser.encrypPassword(newUser.password);
    const savedUser = await newUser.save();
    const token = jsonwebtoken_1.default.sign({ _id: savedUser._id }, process.env.SECRET_KEY || "secret");
    res.header('token', token).json(savedUser);
}
exports.signup = signup;
async function signin(req, res) {
    const user = await user_1.default.findOne({ email: req.body.email });
    if (!user) {
        return res.status(404).json("email or passswor not wrong");
    }
    const correctPassword = await user.validatePassword(req.body.password);
    if (!correctPassword) {
        return res.status(404).json("passswor not found");
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.SECRET_KEY || "secret", {
        expiresIn: 60 * 60 * 24
    });
    res.header('token', token).json(user);
}
exports.signin = signin;
function profile(req, res) {
    res.send("profile");
}
exports.profile = profile;
//# sourceMappingURL=AuthController.js.map