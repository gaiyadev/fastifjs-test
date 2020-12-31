const fastify = require('fastify')({
    logger: true
  })
  
  fastify.get('/:id', async (request, reply) => {
    console.log(request.id)

    return { hello: 'world' }
  })
  
  const start = async () => {
    try {
      await fastify.listen(3000)
    } catch (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  }
  start()