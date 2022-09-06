import { getStockBySku } from './solution'

getStockBySku('LTV719449/39/39')
    .then((x: any) => {
        console.log(x)
    })
    .catch((err: any) => {
        console.log(err)
    })
