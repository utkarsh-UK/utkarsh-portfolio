import React from "react";

import classes from "./Article.module.css";

const Article = ({
  title,
  role,
  content,
  isContentRight = true,
  animationClasses = "",
}) => {
  const isArticleReverseClass = isContentRight
    ? animationClasses
    : `${classes["reverse"]} ${animationClasses}`;
  const articleBackgroundClass = isContentRight
    ? `${classes["portfolio-article__company-background-right"]}`
    : `${classes["portfolio-article__company-background-left"]}`;
  const articleContentClass = isContentRight
    ? `${classes["portfolio-article__company-content-right"]}`
    : `${classes["portfolio-article__company-content-left"]}`;

  return (
    <article className={isArticleReverseClass}>
      <div className={articleBackgroundClass}>
        <h4> {title} </h4>
        <p> {role} </p>
      </div>

      <div className={articleContentClass}>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default Article;
