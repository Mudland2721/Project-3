import React, { Component } from "react";

import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Search from "./search";
import Songs from "./songs";

class Landing extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header
            className='header-color'
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to='/'>
                WalkMan
              </Link>
            }
            scroll>
            <Search />
            <Navigation>
              <Link to='/login'>Login</Link>
              <Link to='/register'>Register</Link>
            </Navigation>
          </Header>
          <Songs />
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
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Landing;
