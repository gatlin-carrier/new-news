import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onInputChange = event => {
    this.setState({
      term: event.target.value
    });
    console.log(this.state.term);
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          {/* <i className="material-icons">search</i> */}
          <input
            type="text"
            placeholder="Search for more articles"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
