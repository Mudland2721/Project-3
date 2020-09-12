import React, { Component } from "react";
import AuthOptions from "../components/auth/AuthOptions";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Search from "./search";

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
              <AuthOptions />
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
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Landing;
