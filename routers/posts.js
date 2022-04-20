const express = require('express');
const router = express.Router();
const { Post, User } = require('../db/models');

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.findAll({raw: true});
    res.render('posts', { Posts: posts })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

// /posts/
router.get('/', async (req, res) => {
  const {name} = req.query;
  try {
    const userPost = (await User.findOne({where: {name}, include: [Post]})).dataValues;
    userPost.Posts = userPost.Posts.map(el => el.dataValues);
    res.render('posts', { Posts: userPost.Posts, name: userPost.name});
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})




module.exports = router;
