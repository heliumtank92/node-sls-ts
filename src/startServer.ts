import { ExpressUtils, ExpsApp } from '@am92/express-utils'

import SERVER_CONFIG, { SERVICE } from './Config/Server.Config'

const successLogFunc = console.success || console.info

export default async function startServer(app: ExpsApp) {
  try {
    // Initialize Express Utils
    await ExpressUtils.initialize()

    // Start Server
    await app.listen(SERVER_CONFIG.PORT)
    successLogFunc(
      `[${SERVICE}] Server Started Successfully! Listening on Port: ${SERVER_CONFIG.PORT}`
    )
  } catch (error: any) {
    const errorMessage = `[${SERVICE}] ${error.message}`
    console.error(errorMessage, error)
    throw error
  }
}
