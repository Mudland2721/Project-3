import React, { Component } from "react";
import { Textfield } from "react-mdl";
import axios from "axios";

//add bootstrap html head tag that ben talked about into new component.

//The data returned from here will be handed to that component to fill cards with data

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { artist: "" };
  }

  change = (e) => {
    console.log("e.target.value:", e.target.value);
    this.setState({
      [e.target.value]: e.target.value,
    });
    this.setState({
      [e.target.value]: "",
    });
  };

  keyPressed(event) {
    if (event.key === "Enter") {
      this.handleFormSubmit();
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    fetchArtist();

    function fetchArtist() {
      axios({
        method: "GET",
        url: "https://deezerdevs-deezer.p.rapidapi.com/search",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key":
            "d0b39321a7msha49b7aec705a8c7p18e760jsnf7d5b65d6c7c",
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
  }

  render() {
    return (
      <Textfield
        onChange={(e) => this.change(e)}
        onKeyPress={this.keyPressed}
        placeholder='Search'
        label='Expandable Input'
        expandable
        expandableIcon='search'
      />
    );
  }
}

export default Search;
