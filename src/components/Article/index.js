import React, { Component } from 'react';
import ArticleMeta from './ArticleMeta';
import api from '../../api';

class Article extends Component {
  state = {}

  componentDidMount() {
    api.Articles.get(this.props.slug)
    .then(response => {
      this.setState({ article: response.article })
    });
  }

  render() {
    if (!this.state.article) {
      return null;
    }

    const { title, body } = this.state.article;
    const canModify = this.props.currentUser &&
      this.props.currentUser.username === this.state.article.author.username;

    return (
      <div className="article-page">
        <div className="banner">
          <div className="container">
            <h1>{title}</h1>
            <ArticleMeta
              article={this.state.article}
              canModify={canModify}
            />
          </div>
        </div>
        <div className="container page">
          <div className="row article-content">
            <div className="col-xs-12">
              <div>{body}</div>
            </div>
          </div>
          <hr />
          <div className="article-actions"></div>
          <div className="row"></div>
        </div>
      </div>
    );
  }
}

export default Article;
