const express = require('express');
const { User } = require('../db/models');
const router = express.Router();


// /user/
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({raw: true});
    res.render('users', { users });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

module.exports = router;
