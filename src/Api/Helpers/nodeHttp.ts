import { EXPS_CONST, httpContext } from '@am92/express-utils'
import { NodeHttp, NodeHttpRequestConfig } from '@am92/node-http'

const nodeHttp = new NodeHttp()
nodeHttp.client.interceptors.request.use(customHeaderRequestSuccess)

export default nodeHttp

function customHeaderRequestSuccess(config: NodeHttpRequestConfig) {
  const requestId = httpContext.getRequestId()
  const sessionId = httpContext.getSessionId()

  config.headers[EXPS_CONST.REQUEST_ID_HEADER_KEY] = requestId
  config.headers[EXPS_CONST.SESSION_ID_HEADER_KEY] = sessionId

  return config
}
