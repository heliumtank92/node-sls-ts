import {
  ExpsNextFunction,
  ExpsParamsDictionary,
  ExpsRequest,
  ExpsResponse,
  ResponseBody
} from '@am92/express-utils'

import SampleModel from './Sample.Model'

import { GetDataRequest, GetDataResponse } from './Sample.Types'

const SampleController = {
  getData
}

export default SampleController

async function getData(
  request: ExpsRequest<ExpsParamsDictionary, GetDataResponse, GetDataRequest>,
  response: ExpsResponse<GetDataResponse>,
  next: ExpsNextFunction
) {
  const { body } = request
  const data = await SampleModel.getData(body)
  response.body = new ResponseBody(200, 'Success', data)
  next()
}
