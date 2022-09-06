// import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';
dotenv.config();
const env=process.env;
const stockFilePath:string=env.STOCK_FILE_PATH ||'data/stock2.json';
const transactionsFilePath:string=env.TRANSACTIONS_FILE_PATH ||'data/transactions2.json';

dotenv.config();
import {getData,isSkuExist} from './helpers/helper';
interface IStock{
  sku:string,
  stock:number
}
interface ITransactions{
  sku:string,
  type:string,
  qty:number
}


export  function getStockBySku(sku:string):Promise<{sku:string,qty:number}>{
  // const stockData=getData('data/stock.json');
  const stockData=getData(stockFilePath);
  const stock:IStock[]=JSON.parse(stockData);
  // const transitionData=getData('data/transactions.json')
  const transitionData=getData(transactionsFilePath)
  const transactions:ITransactions[]=JSON.parse(transitionData);
   if(!isSkuExist(sku,stock) && !isSkuExist(sku,transactions)){
     return Promise.reject("Sku does not exists")
     
   }
   let initialStock=0;
   const data:IStock|null=findStockBySku(sku,stock);
   if(data !==null){
    initialStock=data.stock;
   }
   const total:number=transactions.reduce(calculatStockLevel,initialStock);
   return Promise.resolve({"sku":sku,qty:total});
     
}
function findStockBySku(sku:string,data:any[]):IStock |null{
 return data.find(x=>x.sku==sku) || null
}

function calculatStockLevel(acc:number,current:ITransactions):number {
  if(current.type==='order')
  return (acc+current.qty)
  else
  return (acc-current.qty)

}
