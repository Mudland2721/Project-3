import React, { Component } from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  CardMenu,
  Button,
  IconButton,
  Cell,
  Grid,
} from "react-mdl";
// import Search from "./search";
//add bootstrap html head tag that ben talked about into new component.
//The data returned from here will be handed to that component to fill cards with data

//This is what we want this is where the song is located data/data:Array/preview https://cdns-preview-4.dzcdn.net/stream/c-42b6b614c7ec37521030b330c5e1e6a2-4.mp3

//friend card class activity

//01-Class-Content\19-React\01-Activities\16-Stu_FriendRefactor

class Songs extends Component {
  render() {
    return (
      <Grid className='demo-grid-1'>
        <Cell col={4}>
          <Card
            shadow={0}
            style={{ width: "250px", height: "100px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}>
              Welcome
            </CardTitle>
            <CardText style={{ fontSize: "9px" }}>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </strong>
            </CardText>
            <CardActions border>
              <Button style={{ fontSize: "10px" }} colored>
                Get Started
              </Button>{" "}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </Cell>

        <Cell col={4}>
          <Card
            shadow={0}
            style={{ width: "250px", height: "100px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}>
              Welcome
            </CardTitle>
            <CardText style={{ fontSize: "9px" }}>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </strong>
            </CardText>
            <CardActions border>
              <Button style={{ fontSize: "10px" }} colored>
                Get Started
              </Button>{" "}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </Cell>

        <Cell col={4}>
          <Card
            shadow={0}
            style={{ width: "250px", height: "100px", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover",
              }}>
              Welcome
            </CardTitle>
            <CardText style={{ fontSize: "9px" }}>
              <strong>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </strong>
            </CardText>
            <CardActions border>
              <Button style={{ fontSize: "10px" }} colored>
                Get Started
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </Cell>
      </Grid>
    );
  }
}

export default Songs;
