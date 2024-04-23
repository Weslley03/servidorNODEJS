const express = require('express') 
router = express.Router()
const controleUser = require('../controleRotas/controleUser.js')

router.get('/:id', controleUser.getById) 

module.exports = router