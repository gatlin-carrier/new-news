import React from "react";
import "./NewsItem.css";

const NewsItem = ({ newsItem }) => {
  return (
    <div className="NewsItem">
      <img src={newsItem.urlToImage} alt={newsItem.title} />
      <div className="container">
        <a className="title" href={newsItem.url}>
          {newsItem.title}
        </a>
        {/* <p className="published">{newsItem.publishedAt}</p> */}
        <p className="source">{newsItem.source.name}</p>
        <p className="description">{newsItem.description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
