import { ExpsAppRoute } from '@am92/express-utils'

import { SampleRouter } from '../Resources/Sample'

const Routes: ExpsAppRoute[] = [{ path: '/samples', router: SampleRouter }]

export default Routes
