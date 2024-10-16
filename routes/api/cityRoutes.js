const router = require('express').Router();
const { City } = require('../../models');

router.get('/', async (req, res) => {
    try {
      const cityData = await City.findAll({
        // include: [{ model: License }, { model: Car }],
      });
      res.status(200).json(cityData);
    } catch (err) {
      res.status(500).json(err);
    }
  })

  module.exports = router;



  // access with http://localhost:3001/api/cities