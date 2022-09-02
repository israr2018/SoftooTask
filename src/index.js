"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const solution_1 = require("./solution");
(0, solution_1.getStockBySku)("LTV719449/39/39").then((x) => {
    console.log(x);
})
    .catch((err) => {
    console.log(err);
});
