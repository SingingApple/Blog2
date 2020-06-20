const Post = require("../model/Post");
const { render } = require("ejs");

//Index all post
const postIndex = async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("posts/index", { posts });
  } catch (error) {
    return res.status(201).json({
      success: false,
      data: error,
    });
  }
};

//New Page Post
const postNew = (req, res) => {
  res.render("posts/new", { post: new Post() });
};

//Show Page post
const postShow = async (req, res) => {
  const slug = req.params.slug;
  try {
    const post = await Post.findOne({ slug });
    res.render("posts/show", { post });
  } catch (error) {}
};

//Create New Post
const postCreate = async (req, res, next) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const post = await newPost.save();
    res.redirect(`/posts`);
  } catch (error) {
    console.log(error);
    res.render("posts/new", { post: newPost });
  }
};

//Delete Post
const postDelete = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findByIdAndRemove(id);
    res.redirect("/posts");
  } catch (error) {
    console.log(error);
  }
};

const editPost = async (req, res) => {
  const id = req.params.id;
  try {
    let post = await Post.findById(id);
    post.title = req.body.title;
    post.description = req.body.description;
    await post.save();
  } catch (error) {
    console.log(error);
  }
};

const editPage = async (req, res) => {
  const id = req.params.id;
  try {
    const post = await Post.findById(id);
    res.render("posts/edit", { post });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  postIndex,
  postNew,
  postShow,
  postCreate,
  postDelete,
  editPost,
  editPage,
};
