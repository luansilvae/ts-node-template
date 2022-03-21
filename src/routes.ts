import { Router, Request, Response } from 'express'

const routes = Router()

routes.get('/', (_request: Request, response: Response) => {
  return response.status(200).json({
    message: 'Hello, world!! 👋'
  })
})

export { routes }
