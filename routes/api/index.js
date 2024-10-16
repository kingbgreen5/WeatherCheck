const router = require('express').Router();
// const driverRoutes = require('./driverRoutes');

const cityRoutes = require('./cityRoutes');
// router.use('/drivers', driverRoutes);
router.use('/cities', cityRoutes);

module.exports = router;
