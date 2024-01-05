const router = require('express').Router();
const userRoutes = require('./userRoutes');
const listRoutes = require('./listRoutes');

router.use('/users', userRoutes);
router.use('/Lists', listRoutes);

module.exports = router;
