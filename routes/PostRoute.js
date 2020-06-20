const express = require("express");
const router = express.Router();
const {
  postIndex,
  postNew,
  postShow,
  postCreate,
  postDelete,
  editPost,
  editPage,
} = require("../controller/PostController");

router.route("/new").get(postNew);
router.route("/").post(postCreate);
router.route("/:slug").get(postShow);
router.route("/:id").delete(postDelete);
router.route("/").get(postIndex);
router.route("/edit/:id").get(editPage);
router.route("/:id").put(editPost);
module.exports = router;
