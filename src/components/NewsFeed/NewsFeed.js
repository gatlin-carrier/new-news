import React from "react";
import "./NewsFeed.css";
import NewsItem from "../NewsItem/NewsItem";

const NewsFeed = ({ newsItems }) => {
  const renderedList = newsItems.map(newsItem => {
    return <NewsItem newsItem={newsItem} key={newsItem.url} />;
  });

  return (
    <div className="flex-container">
      <div className="flex-item">{renderedList}</div>
      <div className="middle" />
    </div>
  );
};

export default NewsFeed;
