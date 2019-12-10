"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
async function connection() {
    await mongoose_1.set('useCreateIndex', true);
    await mongoose_1.connect('mongodb://localhost/tes', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db is connected ');
}
exports.connection = connection;
//# sourceMappingURL=databae.js.map