/* Setting things up. */
import Express from 'express'
import Cors from 'cors'
import { setup } from './src/instagram'
import Api from './src/api'

const server = Express()
const port = process.env.PORT || 9600

server.use(Cors())
server.use(Api)

server.get('*', (_, res) => {
    res.sendFile(`${__dirname}/public/index.html`)
})

server.listen(port, async () => {
    console.info('> Conecting to Instagram Account..')
    await setup(true)
    console.info(`> Bot served at: http://localhost:${port}\n`)
})
