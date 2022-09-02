"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
//import { join } from 'path';
// ✅ read file SYNCHRONOUSLY
function syncReadFile(filename:str) {
    //   const result = readFileSync(join(__dirname, filename), 'utf-8');
    const result = (0, fs_1.readFileSync)(filename, 'utf-8');
    
    return result;
}
syncReadFile('../data/stock.json');
