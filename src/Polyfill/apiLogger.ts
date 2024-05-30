import { apiLogger } from '@am92/api-logger'

console.fatal = apiLogger.fatal
console.error = apiLogger.error
console.success = apiLogger.success
console.httpError = apiLogger.httpError
console.httpSuccess = apiLogger.httpSuccess
console.httpInfo = apiLogger.httpInfo
console.warn = apiLogger.warn
console.info = apiLogger.info
console.debug = apiLogger.debug
console.trace = apiLogger.trace
console.log = apiLogger.log

const BLACKLIST_KEYS: string[] = []

global.API_LOGGER_BLACKLIST_MASTER_KEY_HEX =
  process.env.BLACKLIST_MASTER_KEY_HEX || ''
global.API_LOGGER_BLACKLIST_KEYS = BLACKLIST_KEYS

declare global {
  /** @ignore */
  interface Console {
    fatal(...data: any[]): void
    error(...data: any[]): void
    success(...data: any[]): void
    httpSuccess(...data: any[]): void
    httpInfo(...data: any[]): void
    httpError(...data: any[]): void
    warn(...data: any[]): void
    info(...data: any[]): void
    debug(...data: any[]): void
    trace(...data: any[]): void
    log(...data: any[]): void
  }
}
