import fs from 'fs'
import path from 'path'

// JSON dosya yolları
const dataDir = path.resolve('server/data')

const dbFiles = {
    products: path.join(dataDir, 'products.json'),
    users: path.join(dataDir, 'users.json'),
    orders: path.join(dataDir, 'orders.json'),
    messages: path.join(dataDir, 'messages.json'),
}

export type DbType = 'products' | 'users' | 'orders' | 'messages'

/**
 * JSON dosyasından veri okur
 */
export function readData<T = any>(type: DbType): T[] {
    try {
        const filePath = dbFiles[type]
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        return JSON.parse(fileContent)
    } catch {
        return []
    }
}

/**
 * JSON dosyasına veri yazar
 */
export function writeData<T = any>(type: DbType, data: T[]): void {
    const filePath = dbFiles[type]
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))
}
