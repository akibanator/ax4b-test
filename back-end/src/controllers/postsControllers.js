const axios = require("axios");

const getPostData = async (req, res) => {
  const id = req.params.id;

  try {
    const { data: post } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    const { data: comments } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    );

    const getPost = {
      post: post,
      comments: comments,
    };

    res.send(getPost);
  } catch {
    res.sendStatus(400);
  }
};

const getPosts = async (req, res) => {
  try {
    const { data: posts } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
    );

    res.send(posts);
  } catch {
    res.sendStatus(400);
  }
};

module.exports = {
  getPostData,
  getPosts,
};
