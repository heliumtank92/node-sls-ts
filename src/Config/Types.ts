import { CorsOptions } from 'cors'

export type ServerConfig = {
  PORT: number
  BODY_LIMIT: string
  CORS_OPTIONS: CorsOptions
}
