import React from "react";
import NewsFeed from "./NewsFeed/NewsFeed";
import SearchBar from "./SearchBar/SearchBar";
import news from "../apis/news";

class App extends React.Component {
  state = {
    newsItems: []
  };

  componentWillMount() {
    this.getNewsItems();
  }

  getNewsItems = () => {
    var url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=us&" +
      "apiKey=23523739d9f1492291dbaa6a7f7393a1";

    news.get(url).then(response => {
      this.articles = response.data.articles;
      this.setState({
        newsItems: this.articles
      });
    });
  };

  render() {
    return (
      <div>
        <SearchBar />
        <NewsFeed newsItems={this.state.newsItems} />
      </div>
    );
  }
}

export default App;
