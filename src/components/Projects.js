import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./projects.scss";
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, Container, Row, Col
} from 'reactstrap';


class Projects extends Component {
  constructor(props){
    super(props);
    this.state = { 
      colorGame(){ 
        window.location.href = "https://matt525.github.io/RGBColorGame/"
      }
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
      <Card height="100%">
        <CardImg top width="100%" src="https://i.ytimg.com/vi/v3orh07cRPA/maxresdefault.jpg" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Patatap Clone</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Demo</Button>
          <Button>Code</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top width="100%" src="https://codepen.io/jsjoeio/pen/WjvjaQ/image/large.png" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>RGB Color Game</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
          <Button onClick={this.colorGame} href="https://matt525.github.io/RGBColorGame/"><a href>Demo</a></Button>
          <Button tag={Link} to="https://github.com/Matt525/RGBColorGame">Code</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card>
        <CardImg top height="295px" width="100%" src="https://mdn.mozillademos.org/files/10383/mdn-breakout-gameplay.png" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Breakout Game</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className="blue">Demo</Button>
          <Button className="blue" style={{margin: "10px"}}>Code</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card style={{width: '600px'}}>
        <CardImg top height="290px" width="100%"src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2019/01/weather-app-796x419.png" alt="Card image cap" />
        <CardBody style={{padding: '20px'}}>
          <CardTitle>Weather Application</CardTitle>
          <CardSubtitle>Weather application that pulls from openweather api.</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
          <Button className="blue">Demo</Button>
          <Button className="blue" style={{margin: "10px"}}>Code</Button>
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
