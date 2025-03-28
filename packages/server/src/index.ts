import Fastify from 'fastify'
import fastifyMiddie from '@fastify/middie'
import fastifyCors from '@fastify/cors'

const app = Fastify({
  logger: true
})

app.register(fastifyMiddie)
app.register(fastifyCors, {})

app.get('/', async (request, reply) => {
  return { msg: 'This is a message from the server!' }
})

await app.listen({ port: 3001 })
