import React, { Component } from "react";
import { Textfield } from "react-mdl";
import axios from "axios";

class Search extends Component {
  state = {
    artist: "",
  };

  // componentDidMount() {
  //   document.addEventListener("keydown");
  // }

  // handleInputChange = event => {
  //   set state
  //   if user typed in more than 3 characters
  //     wait a second
  //     call the API
  // };

  // onKeyDown(e) {
  //   // make api call here

  //   if (e.key === `Enter`) {
  //     console.log(`ENTER CLICKED!!!!!!!!!!!!!!!!!!!!!!!!!!!`);
  //   }
  // }

  change = (e) => {
    this.setState({
      [e.target.value]: e.target.value,
    });
  };

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
        placeholder='search'
        label='Expandable Input'
        expandable
        expandableIcon='search'
      />
    );
  }
}

export default Search;
