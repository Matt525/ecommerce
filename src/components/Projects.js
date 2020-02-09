import React, { Component } from "react";
import "./projects.scss";
import weather_image from './photo_source/weather_appplication_pic.png'
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { 
    }
  }
  render() {    
    return (

      <div>
        <div className="section-title">
          <h1 id="projects-title">P R O J E C T S</h1>
        </div>

        {/* <!-- One --> */}
      
      
      <CardDeck style={{background: '#444', height: '100%', padding: '0px', margin: '0px'}}>
        <Row display="flex" justify-content="center" style={{margin: '0px', paddingTop: '20px', }}>
          <Col>
          {/* Patatap Clone */}
      <Card height="100%">
        <CardImg top height="340px" width="100%" src="https://i.ytimg.com/vi/v3orh07cRPA/maxresdefault.jpg" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Patatap Clone</CardTitle>
          <CardSubtitle>Press keys and trigger animation/sound </CardSubtitle>
          <CardText>This is a clone of the Patatap.com web app that utilitzes vanilla JS, paperJS and howlerJS to bring you a fun interactive web application.</CardText>
          <Button style={{margin: '10px'}}><a style={{color: 'white'}} href="https://suspicious-heyrovsky-63d4b0.netlify.com">Demo</a></Button>
          <Button><a style={{color: 'white'}} href="https://github.com/Matt525/patatapclone">Code</a></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      {/* Color Game */}
      <Card>
        <CardImg top width="100%" src="https://codepen.io/jsjoeio/pen/WjvjaQ/image/large.png" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>RGB Color Game</CardTitle>
          <CardSubtitle>Guess the color by the RGB code.</CardSubtitle>
          <CardText>RGB color game utilizing vanilla JS and CSS styling.</CardText>
          <Button style={{margin: '10px'}}><a style={{color: 'white'}} href="https://matt525.github.io/RGBColorGame/">Demo</a></Button>
          <Button><a style={{color: 'white'}} href="https://github.com/Matt525/RGBColorGame">Code</a></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>

        {/* Breakout Project */}

      <Card>
        <CardImg top height="360px" width="100%" src="https://mdn.mozillademos.org/files/10383/mdn-breakout-gameplay.png" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Breakout Game</CardTitle>
          <CardSubtitle>Breakout Vanilla JS</CardSubtitle>
          <CardText>This project is the game 'breakout' built completed via vanilla JavaScript.</CardText>
          <Button style={{margin: '10px'}}><a style={{color: 'white'}} href="https://pensive-mccarthy-649681.netlify.com">Demo</a></Button>
          <Button><a style={{color: 'white'}} href="https://github.com/Matt525/BreakOut">Code</a></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>

      {/* Weather Application project */}
      <Card style={{width: '600px'}}>
        <CardImg top height="360px" width="100%"src={weather_image} alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Weather Application</CardTitle>
          <CardSubtitle>Local weather application with implemented API</CardSubtitle>
          <CardText>Weather application that shows your current locations weather using darkSky api.</CardText>
          <Button style={{margin: '10px'}}><a style={{color: 'white'}} href="https://musing-morse-5eaa60.netlify.com">Demo</a></Button>
          <Button><a style={{color: 'white'}} href="https://github.com/Matt525/weather_application">Code</a></Button>
        </CardBody>
      </Card>
      </Col>
      </Row>
    </CardDeck>
    
    </div>
      
    );
  }
}

export default Projects;
