"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controller/AuthController");
const verifyToken_1 = require("../libs/verifyToken");
const router = express_1.Router();
router.route('/signup').post(AuthController_1.signup);
router.post('/signin', AuthController_1.signin);
router.get('/profile', verifyToken_1.tokenValidator, AuthController_1.profile);
exports.default = router;
//# sourceMappingURL=auth.js.map