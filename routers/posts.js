const express = require('express');
const router = express.Router();
const {
  Post,
  User
} = require('../db/models');

router.get('/all', async (req, res) => {
  try {
    const posts = await Post.findAll({
      raw: true
    });
    res.render('posts', {
      Posts: posts
    })
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
})

// /posts/
router.get('/', async (req, res) => {
  const {
    name
  } = req.query;
  try {
    const userPost = (await User.findOne({
      where: {
        name
      },
      include: [Post]
    })).dataValues;
    userPost.Posts = userPost.Posts.map(el => el.dataValues);
    res.render('posts', {
      Posts: userPost.Posts,
      name: userPost.name
    });
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
});

router.post('/', async (req, res) => {
  const {
    name
  } = req.query;
  const {
    title,
    body
  } = req.body;
  try {
    const {
      id
    } = await User.findOne({
      where: {
        name
      },
      raw: true
    })
    await Post.create({
      title,
      body,
      userID: id
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.status(501).end();
  }
})




module.exports = router;
