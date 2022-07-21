import React, { Component } from "react";

//import SearchBar.css
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    return (
            <div class="SearchBar">
              <input placeholder="Enter A Song, Album, or Artist" />
              <button class="SearchButton">SEARCH</button>
            </div>)
  }
}

export default SearchBar;
