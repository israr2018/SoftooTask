import { readFileSync } from 'fs'
export function getData(filename: string): string {
    const result = readFileSync(filename, 'utf-8')
    return result
}

export function isSkuExist(sku: string, data: any[]): boolean {
    const result: any = data.find((x) => x.sku == sku)
    if (result !== undefined) {
        return true
    }
    return false
}
