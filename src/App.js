import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monstars: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monstars: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monstars, searchField } = this.state;
    const filteredMonstarts = monstars.filter((monstar) =>
      monstar.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Roledex</h1>
        <SearchBox
          placeholder="Search Monstarts"
          handleChange={this.handleChange}
        />
        <CardList monstars={filteredMonstarts}></CardList>
      </div>
    );
  }
}

export default App;
