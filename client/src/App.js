import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
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
        q: "eminem",
      },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to='/'>
                Song App
              </Link>
            }
            scroll>
            <Navigation>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to='/'>
                SongApp
              </Link>
            }>
            <Navigation>
              <Link to='/favorites'>Favorites</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
