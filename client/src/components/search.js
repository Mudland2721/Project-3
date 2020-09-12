import React, { Component } from "react";
import { Textfield } from "react-mdl";
import axios from "axios";
import Songs from "./songs";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: "" };
    this.keyPressed = this.keyPressed.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  keyPressed(event) {
    if (event.key === "Enter") {
      this.handleFormSubmit(event);
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(
      `HERE WE GOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO`
    );
    // console.log(this.state.name);
    axios({
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "d0b39321a7msha49b7aec705a8c7p18e760jsnf7d5b65d6c7c",
        useQueryString: true,
      },
      params: {
        q: this.state.artist,
      },
    })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <Textfield
          onChange={(e) => this.change(e)}
          onKeyPress={this.keyPressed}
          placeholder='Search'
          label='Expandable Input'
          name='artist'
          expandable
          expandableIcon='search'
        />
      </div>
    );
  }
}

export default Search;
