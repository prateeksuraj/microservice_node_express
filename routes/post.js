const express = require('express');
const {
    getPosts,
    createPost,
    isPoster,
    updatePost,
    deletePost
} = require('../controllers/post');
const { isAuth } = require('../middleWare/requiredSignin');

const { createPostValidator } = require('../validator');

const router = express.Router();

router.get('/posts',isAuth ,getPosts);
router.post('/post/new/:userId', isAuth, isPoster,createPostValidator,createPost);
router.post('/post/:postId', isAuth, isPoster,createPostValidator, updatePost);
router.get('/post/delete/:postId', isAuth, isPoster, deletePost);
module.exports = router;
