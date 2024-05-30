import { configureRouter, ExpsRouterConfig } from '@am92/express-utils'
import { Router } from 'express'

import SampleController from './Sample.Controller'

const { getData } = SampleController

export const SampleRouterConfig: ExpsRouterConfig = {
  routerName: 'sample',
  routesConfig: {
    getData: {
      method: 'POST',
      path: '/',
      pipeline: [getData]
    }
  }
}

export const SampleRouter = configureRouter(Router(), SampleRouterConfig)
