import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://chrisw-nc-news.herokuapp.com/api",
});

export const getArticles = (sort_by, topic) => {
  return newsApi
    .get(`/articles`, { params: { sort_by, topic } })
    .then((res) => {
      return res.data.articles;
    });
};

export const getTopics = () => {
  return newsApi.get(`/topics`).then((res) => {
    return res.data.topics;
  });
};

export const getSingleArticle = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsForArticle = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const getAllUsers = () => {
  return newsApi.get(`/users`).then((res) => {
    return res.data.users;
  });
};

export const patchArticleVoteInc = (id) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: 1 }).then((res) => {
    return res.data.updatedArticle;
  });
};

export const patchArticleVoteDec = (id) => {
  return newsApi.patch(`/articles/${id}`, { inc_votes: -1 }).then((res) => {
    return res.data.updatedArticle;
  });
};

export const postComment = (id, user, body) => {
  console.log(user,"<<<user in api")
  return newsApi
    .post(`/articles/${id}/comments`, { username: user, body: body })
    .then((res) => {
      console.log(res.data,"<<<user in api")
      return res.data.comment
    })
    .catch((err) => {
      if (err) console.log(err);
    });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`).then(() => {
    return;
  });
};
