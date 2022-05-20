import next from 'next'
import Hapi from '@hapi/hapi'
import { nextHandlerWrapper } from './next-wrapper'

const port = parseInt(process.env.PORT, 10) || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = new Hapi.Server({
  port,
})

app.prepare().then(async () => {
  server.route({
    method: 'GET',
    path: '/_next/{p*}',
    handler: nextHandlerWrapper(app),
  })

  server.route({
    method: '*',
    path: '/{p*}',
    handler: nextHandlerWrapper(app),
  })

  server.route({
    method: 'POST',
    path: '/',
    handler: function (request, h) {
      return request.payload; /* print payload into the console */
    }
  });

  try {
    await server.start()
    console.log(`> Hello, open http://localhost:${port}`)
  } catch (error) {
    console.log('Error starting server')
    console.log(error)
  }
})
