import Fastify from 'fastify'
import fastifyMiddie from '@fastify/middie'
import fastifyCors from '@fastify/cors'
import { add } from '@utils/index'

const app = Fastify({
  logger: true
})

app.register(fastifyMiddie)
app.register(fastifyCors, {})

app.get('/msg', async (request, reply) => {
  return { msg: `This is a message from the server! ${add(1, 2)}` }
})

await app.listen({ host: process.env.HOST, port: Number(process.env.PORT) })
