import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://chrisw-nc-news.herokuapp.com/api",
});

export const getArticles = (sort_by, topic) => {
  return newsApi.get(`/articles`, { params: {sort_by, topic}}).then((res) => {
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

export const postComment = (id, body) => {
  return newsApi.post(`/articles/${id}/comments`,  { username: "jessjelly", body: body}).then((res) => {
      console.log(res,"<<<<in api")
  }).catch((err) => {
      if (err) console.log(err)
  })
};

export const deleteComment = (article_id, comment_id) => {
    return newsApi.delete(`articles/${article_id}/comments/${comment_id}`).then(() => {
        return; 
    })
}
