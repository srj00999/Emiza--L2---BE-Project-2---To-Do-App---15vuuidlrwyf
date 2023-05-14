const router = require('express').Router();

router.use('/user', require('./userRoutes'));
router.use('/task', require('./taskRoutes'));


module.exports = router;