"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.tokenValidator = (req, res, next) => {
    const token = req.header('token');
    if (!token) {
        return res.status(401).json('access denied');
    }
    const payload = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY || 'secret');
    console.log(payload);
    next();
};
//# sourceMappingURL=verifyToken.js.map