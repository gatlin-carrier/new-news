import React from "react";
import NewsFeed from "./NewsFeed/NewsFeed";
import SearchBar from "./SearchBar/SearchBar";
import WeatherFeed from "./WeatherFeed/WeatherFeed";
import news from "../apis/news";
import weather from "../apis/weather";
import "./App.css";

class App extends React.Component {
  state = {
    newsItems: [],
    longitude: "",
    latitude: "",
    forecast: []
  };

  componentWillMount() {
    this.getNewsItems();
    this.getLocation();
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

  onFormSubmit = async term => {
    var url = `https://newsapi.org/v2/everything?q=${term}&sortBy=popularity&apiKey=23523739d9f1492291dbaa6a7f7393a1`;

    news.get(url).then(response => {
      this.articles = response.data.articles;
      this.setState({
        newsItems: this.articles
      });
    });
  };

  getLocation = () => {
    "geolocation" in navigator
      ? navigator.geolocation.getCurrentPosition(position => {
          this.setState({
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          });
          this.getWeather();
        })
      : console.log("geolocation is not enabled on this browser");
  };

  getWeather = async () => {
    const forecast = await weather.get(
      `${this.state.latitude},${this.state.longitude}`
    );
    this.setState({
      forecast: forecast
    });

    console.log(this.state.forecast);
  };

  render() {
    return (
      <div>
        <SearchBar className="searchBar" onFormSubmit={this.onFormSubmit} />
        <div className="wrapper">
          <div className="row">
            <div className="column">
              <NewsFeed className="newsFeed" newsItems={this.state.newsItems} />
            </div>
            <div className="column">
              <WeatherFeed
                className="weatherFeed"
                forecast={this.state.forecast}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
