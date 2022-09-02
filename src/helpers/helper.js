"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSkuExist = exports.getData = void 0;
const fs_1 = require("fs");
function getData(filename) {
    const result = (0, fs_1.readFileSync)(filename, 'utf-8');
    return result;
}
exports.getData = getData;
function isSkuExist(sku, data) {
    const result = data.find(x => x.sku == sku);
    if (result !== undefined) {
        return true;
    }
    return false;
}
exports.isSkuExist = isSkuExist;
