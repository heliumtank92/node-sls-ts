import { EXPS_CONST, httpContext } from '@am92/express-utils'
import {
  NodeHttp,
  NodeHttpInterceptor,
  NodeHttpRequestConfig
} from '@am92/node-http'

const CustomHeaderInterceptor: NodeHttpInterceptor = {
  request: [customHeaderRequestSuccess, null, { synchronous: true }]
}

const nodeHttp = new NodeHttp()
CustomHeaderInterceptor.request &&
  nodeHttp.client.interceptors.request.use(...CustomHeaderInterceptor.request)

export default nodeHttp

function customHeaderRequestSuccess(config: NodeHttpRequestConfig) {
  const requestId = httpContext.getRequestId()
  const sessionId = httpContext.getSessionId()

  config.headers[EXPS_CONST.REQUEST_ID_HEADER_KEY] = requestId
  config.headers[EXPS_CONST.SESSION_ID_HEADER_KEY] = sessionId

  return config
}
