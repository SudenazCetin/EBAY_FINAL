import express, { Request, Response } from 'express'
import { readData, writeData, type DbType } from '../utils/db'

const app = express()

// Middleware
app.use(express.json())

// CRUD route generator
const resourceTypes: DbType[] = ['products', 'users', 'orders', 'messages']

resourceTypes.forEach((type) => {
    // GET - Listele
    app.get(`/${type}`, (req: Request, res: Response) => {
        const data = readData(type)
        res.json(data)
    })

    // POST - Ekle
    app.post(`/${type}`, (req: Request, res: Response) => {
        const data = readData(type)
        const newItem = { id: Date.now().toString(), ...req.body }
        data.push(newItem)
        writeData(type, data)
        res.status(201).json(newItem)
    })

    // PUT - Güncelle
    app.put(`/${type}/:id`, (req: Request, res: Response) => {
        let data = readData(type)
        const idx = data.findIndex((item: any) => item.id === req.params.id)
        if (idx === -1) {
            return res.status(404).json({ error: 'Not found' })
        }
        data[idx] = { ...data[idx], ...req.body }
        writeData(type, data)
        res.json(data[idx])
    })

    // DELETE - Sil
    app.delete(`/${type}/:id`, (req: Request, res: Response) => {
        let data = readData(type)
        data = data.filter((item: any) => item.id !== req.params.id)
        writeData(type, data)
        res.status(204).end()
    })
})

export default defineEventHandler((event) => {
    return new Promise((resolve, reject) => {
        app(event.node.req as any as Request, event.node.res as any as Response, (err: any) => {
            if (err) {
                reject(err)
            } else {
                resolve(undefined)
            }
        })
    })
})
