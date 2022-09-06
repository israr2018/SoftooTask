import { getStockBySku } from '../solution'
const messsage1 = 'Sku does not exists'
const invalidSkue = 'dummy'
const validSku = 'LTV719449/39/39'
const stockLevel = 14183
describe('test getStockBySku function', () => {
    it("invalid skue test'", async () => {
        try {
            await getStockBySku(invalidSkue)
        } catch (ex) {
            expect(ex).toBe(messsage1)
        }
    })
    it("valid sku test'", async () => {
        try {
            const { sku } = await getStockBySku(validSku)
            expect(sku).toBe(validSku)
        } catch (ex) {}
    })
    it("Stock level greater then 0'", async () => {
        try {
            const { qty } = await getStockBySku(validSku)
            expect(qty).toBeGreaterThan(3)
        } catch (ex) {}
    })
    it('Stock level', async () => {
        try {
            const { qty } = await getStockBySku(validSku)
            expect(qty).toBeGreaterThan(stockLevel)
        } catch (ex) {}
    })
})
