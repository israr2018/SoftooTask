import { readFileSync, promises as fsPromises } from 'fs';
import { Number } from 'mongoose';
//import { join } from 'path';

// ✅ read file SYNCHRONOUSLY
interface IStock{
  sku:string,
  stock:number
}
interface ITransactions{
  sku:string,
  type:string,
  qty:number
}

function getData(filename: string) {
//   const result = readFileSync(join(__dirname, filename), 'utf-8');
  const result = readFileSync(filename, 'utf-8');

  // console.log(result); // 👉️ "hello world hello world ..."

  return result;
}
function getStockBySku(sku:string):Promise<{sku:string,qty:number}>{
  const stockData=getData('../data/stock.json');
  const stock:IStock[]=JSON.parse(stockData);
  const transitionData=getData('../data/transactions.json')
  const transactions:ITransactions[]=JSON.parse(transitionData);
   if(!isSkuExist(sku,stock) && !isSkuExist(sku,transactions)){
     return Promise.reject("Sku does not exists")
     
   }
   const data:IStock=findBySku(sku,stock);
   let initialStock:number=0;
   if(data !==undefined){
    initialStock=data.stock;
   }
   const total:number=transactions.reduce((initialStock,transaction)=>calculatStockLevel(initialStock,transaction),initialStock)};
   return Promise.resolve({sku,qty:total});
     
}

function isSkuExist(sku:string,data:any[]):Boolean{
 const result:any= data.find(x=>x.sku==sku)
 if(result !=undefined){
   return false
 }
 return true;
}
function findBySku(sku:string,data:IStock[]):IStock{
 return data.find(x=>x.sku==sku)
}
function calculatStockLevel(acc:number,current:ITransactions):number{
 
 return (acc+current.qty)
}
Awaited getStockBySku("LTV719449/39/39")