import axios from "axios";
const dayjs = require('dayjs');
const relativeTime = require('dayjs/plugin/relativeTime');

const newsApi = axios.create({
  baseURL: "https://chrisw-nc-news.herokuapp.com/api",
});

export const getArticles = (topic, sort_by ) => {
  return newsApi
    .get(`/articles`, { params: { topic, sort_by } })
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
  return newsApi
    .post(`/articles/${id}/comments`, { username: user, body: body })
    .then((res) => {
      return res.data.comment
    })
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`comments/${comment_id}`).then(() => {
    return;
  });
};

export const formatDate = (date) => {
  
    dayjs.extend(relativeTime)
    let a = dayjs();
    return dayjs(date).from(a);
  
}