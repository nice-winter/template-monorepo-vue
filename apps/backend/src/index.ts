import Fastify from 'fastify'
import fastifyMiddie from '@fastify/middie'
import fastifyCors from '@fastify/cors'

const app = Fastify({
  logger: true
})

app.register(fastifyMiddie)
app.register(fastifyCors, {})

app.get('/msg', async (request, reply) => {
  return { msg: 'This is a message from the server!' }
})

await app.listen({ host: process.env.HOST, port: Number(process.env.PORT) })
