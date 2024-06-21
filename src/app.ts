import '~/Polyfill/loadEnv'
import '~/Polyfill/nodeEnv'
import '~/Polyfill/apiLogger'

import { configureApp, ExpsApp } from '@am92/express-utils'
import cors from 'cors'
import express from 'express'
import helmet from 'helmet'

import SERVER_CONFIG from '~/Config/Server.Config'
import startServer from '~/startServer'

import Routes from '~/Api/Routes'

const { CORS_OPTIONS, BODY_LIMIT } = SERVER_CONFIG
const app: ExpsApp = express()

app.use(cors(CORS_OPTIONS))
app.use(express.json({ limit: BODY_LIMIT }))
app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())

// Initialize Routes
configureApp(app, Routes)
;(async () => {
  // Start Server
  await startServer(app)
})()

// For testing
export default app
