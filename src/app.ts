import express from 'express'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  public express: express.Application

  public constructor() {
    this.express = express()
    this.routes()
    this.database()
  }

  private routes(): void {
    this.express.use(routes)
  }

  private database(): void {
    mongoose.connect('mongodb://localhost:27017/starter_mongo', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default new App().express
