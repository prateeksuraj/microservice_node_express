const Post = require('../models/post');
const User = require('../models/user');
const _ = require('lodash');

exports.getPosts = async (req, res) => {
    const currentPage = req.query.page || 1;
    const perPage = 6;
    let totalItems;

    const posts = await Post.find()
        .countDocuments()
        .then(count => {
            totalItems = count;
            return Post.find()
                .skip((currentPage - 1) * perPage)
                .populate('postedBy', '_id name')
                .select('_id title body created')
                .limit(perPage)
                .sort({ created: -1 });
        })
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => console.log(err));
};

exports.isPoster = (req, res, next) => {
    console.log(req.auth);
    let adminUser =  req.auth && req.auth.role === 'admin';
    let isPoster = adminUser;
    
    if (!isPoster) {
        return res.status(403).json({
            error: 'User is not authorized'
        });
    }
    next();
};

exports.createPost= async (req,res,next)=>{
    console.log(req.auth);
      const post = new Post({
        title: req.body.title,
        body: req.body.body,
        postedBy: req.auth._id,
        ladtUpdatedBy: req.auth._id
      });
      const addPost = await post.save();
      if(addPost){
      res.status(200).send({
        data: addPost,
        message: 'post saved successfully.',
      });
    } else {
        return res.status(500).send({ message: ' Error in Creating post.' });
    }
    } ;




exports.updatePost= async (req, res) => {
    console.log(req.auth);
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (post) {
        post.title=req.body.title,
        post.body=req.body.body,
        post.ladtUpdatedBy=req.auth._id
      const updatedPost= await post.save();
      if (updatedPost) {
        return res
          .status(200)
          .send({ message: 'Post Updated', data: updatedPost });
      }
    }
    return res.status(500).send({ message: ' Error in Updating Post.' });
  }

exports.deletePost = async (req, res) => {
    let postId = req.params.postId;
    const deletedPost=await Post.findById(postId);
    if (deletedPost) {
        await deletedPost.remove();
        res.send({ message: 'Post Deleted' });
      } else {
        res.send('Error in Deletion.');
      }
};


