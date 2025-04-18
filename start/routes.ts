/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import logger from '@adonisjs/core/services/logger'
import router from '@adonisjs/core/services/router'

logger.info('app test okok')
router.on('/').render('pages/home')
