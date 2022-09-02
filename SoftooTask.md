- (done)The function must read from the `stock` and `transactions` files on each invocation (totals cannot be precomputed)
- (done)The function must throw an error where the SKU does not exist in the `transactions.json` and `stock.json` file
- All code must be adequately tested
Notes:
- Transactions may exist for SKUs which are not present in `stock.json`. It should be assumed that the starting quantity for these is 0.
- Functionality can be split into many files to help keep the project clear and organised 
## How to exectute the project
- add .env file  and update the varialbe 'STOCK_FILE_PATH' and 'TRANSACTIONS_FILE_PATH'
- npm i
- npm start