import React, { Component } from "react";
import { Textfield } from "react-mdl";
import axios from "axios";

class Search extends Component {
  state = {
    artist: "",
  };

  componentDidMount() {
    this.fetchArtist();
  }

  fetchArtist = () => {
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
  };

  render() {
    return (
      <Textfield
        onChange={(e) => this.setState({ artist: e.target.value })}
        label='Expandable Input'
        value={this.state.artist}
        expandable
        expandableIcon='search'
      />
    );
  }
}

export default Search;
