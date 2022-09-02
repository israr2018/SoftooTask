"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStockBySku = void 0;
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const env = process.env;
const stockFilePath = env.STOCK_FILE_PATH || 'data/stock2.json';
const transactionsFilePath = env.TRANSACTIONS_FILE_PATH || 'data/transactions2.json';
dotenv.config();
const helper_1 = require("./helpers/helper");
function getStockBySku(sku) {
    const stockData = (0, helper_1.getData)(stockFilePath);
    const stock = JSON.parse(stockData);
    const transitionData = (0, helper_1.getData)(transactionsFilePath);
    const transactions = JSON.parse(transitionData);
    if (!(0, helper_1.isSkuExist)(sku, stock) && !(0, helper_1.isSkuExist)(sku, transactions)) {
        return Promise.reject("Sku does not exists");
    }
    let initialStock = 0;
    const data = findStockBySku(sku, stock);
    if (data !== null) {
        initialStock = data.stock;
    }
    const total = transactions.reduce(calculatStockLevel, initialStock);
    return Promise.resolve({ "sku": sku, qty: total });
}
exports.getStockBySku = getStockBySku;
function findStockBySku(sku, data) {
    return data.find(x => x.sku == sku) || null;
}
function calculatStockLevel(acc, current) {
    return (acc + current.qty);
}
