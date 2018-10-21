import React from 'react';
import { Link } from '@reach/router';

const ArticleActions = ({ article, canModify }) => {
  const del = () => {};

  if (canModify) {
    return (
      <span>
        <Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>
        <button className="btn btn-outline-danger btn-sm" onClick={del}>
          <i className="ion-trash-a"></i> Delete Article
        </button>
      </span>
    );
  }

  return (<span></span>);
};

export default ArticleActions;
