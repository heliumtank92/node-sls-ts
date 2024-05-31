import { CorsOptions } from 'cors'

import { ServerConfig } from './Config.Types'

const {
  PORT = '8080',
  BODY_LIMIT = '5mb',
  ALLOW_CORS_ORIGIN = '',
  ALLOW_CORS_METHODS = ''
} = process.env

const { npm_package_name: pkgName = '', npm_package_version: pkgVersion = '' } =
  process.env
const SERVICE: string = `${pkgName}@${pkgVersion}`

export { SERVICE }

const REQUIRED_CONFIG: string[] = ['ALLOW_CORS_ORIGIN', 'ALLOW_CORS_METHODS']

REQUIRED_CONFIG.forEach((key: string) => {
  if (!process.env[key]) {
    console.error(`[${SERVICE}] Missing Server Config:`, key)
    process.exit(1)
  }
})

const ALLOW_ORIGINS: string[] = ALLOW_CORS_ORIGIN.split(',')
const ALLOW_ORIGINS_REGEXP: RegExp[] = ALLOW_ORIGINS.map(
  (origin: string) => new RegExp(_sanitizeRegExpStr(origin))
)

const CORS_OPTIONS: CorsOptions = {
  methods: ALLOW_CORS_METHODS,
  origin: ALLOW_ORIGINS_REGEXP,
  preflightContinue: false
}

const SERVER_CONFIG: ServerConfig = {
  PORT: parseInt(PORT),
  BODY_LIMIT,
  CORS_OPTIONS
}

export default SERVER_CONFIG

function _sanitizeRegExpStr(string: string): string {
  const escapedString: string = string.trim().replace(/[./]/g, '\\$&')
  const whildcardReplaced: string = escapedString.replace(
    /\*/g,
    '[0-9a-zA-Z.\\-_:]*'
  )
  return `^${whildcardReplaced}$`.trim()
}
