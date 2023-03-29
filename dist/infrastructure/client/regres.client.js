"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegresClient = void 0;
const axios_1 = require("axios");
class RegresClient {
    constructor() { }
    async getUserData() {
        try {
            return await axios_1.default.get(`https://reqres.in/api/users/2`);
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.RegresClient = RegresClient;
//# sourceMappingURL=regres.client.js.map