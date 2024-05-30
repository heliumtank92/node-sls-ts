import { GetDataRequest, GetDataResponse } from './Sample.Types'

const SampleModel = {
  getData
}

export default SampleModel

async function getData(body: GetDataRequest): Promise<GetDataResponse> {
  if (typeof body.test === 'number') {
    return { valid: true }
  }

  return { valid: false }
}
