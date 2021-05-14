import React, { useState } from "react";
import "../App.css";
import { Card, Button, Carousel, ListGroup } from "react-bootstrap";
import cunyGallery from "../images/cunyGallery.png";
import cunyGalleryB from "../images/cunyGalleryB.png";
import yiyiBakery from "../images/yiyiBakery.png";
import feedingPiggy from "../images/feedingPiggy.png";
import feedingPiggyClip from "../images/feedingPiggyClip.gif";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={feedingPiggy} alt="cunyGallery" width="400" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={feedingPiggyClip} alt="cunyGallery" width="400" />
      </Carousel.Item>
    </Carousel>
  );
}

class Projects extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header as="h5">CUNY Gallery</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            {/*images for application */}
            <Carousel>
              <Carousel.Item>
                <img src={cunyGallery} alt="cunyGallery" width="400" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={cunyGalleryB} alt="cunyGalleryB" width="400" />
              </Carousel.Item>
            </Carousel>
            {/*Project information */}
            <Card.Text>
              Senior Project created in a group of 4, CUNY Gallery is a web
              application that allows users to scan QR codes located on artwork{" "}
              <br />
              throughout the CUNY campuses and redirects them to more
              information about the artist and artwork.
            </Card.Text>

            {/*Technologies used */}
            <Card.Title>Technoligies Used</Card.Title>
            <ListGroup horizontal>
              <ListGroup.Item>Ionic React</ListGroup.Item>
              <ListGroup.Item>TypeScript</ListGroup.Item>
              <ListGroup.Item>AWS FireBase</ListGroup.Item>
            </ListGroup>

            {/*link to project */}
            <Button variant="primary">Visit Cuny Gallery</Button>
          </Card.Body>
        </Card>

        <br />

        <Card>
          <Card.Header as="h5">Yi Yi Bakery</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <img src={yiyiBakery} alt="cunyGallery" width="400" />
            <Card.Text>
              Landing page created for a brick and mortar bakery using Flask and{" "}
              <br />
              deployed to Github Pages.
            </Card.Text>
            {/*Technologies used */}
            <Card.Title>Technoligies Used</Card.Title>
            <ListGroup horizontal>
              <ListGroup.Item>HTML & CSS</ListGroup.Item>
              <ListGroup.Item>Javascipt</ListGroup.Item>
              <ListGroup.Item>Flask</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
            </ListGroup>
            <a
              href="https://mleong011.github.io/YiYiBakery/index.html"
              target="_blank"
            >
              {" "}
              <Button variant="primary">Visit YiYi Bakery</Button>
            </a>
          </Card.Body>
        </Card>

        <br />

        <Card>
          <Card.Header as="h5">Feeding Piggy</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            <ControlledCarousel />
            <Card.Text>
              Designed and Built this game using Processing.js that challenged users to <br/>
              catch 20 falling objects using arrow keys<br/>
              Objects fall at a faster rate throughout the game<br/>
              Used Conditional Logic Functions in Processing.js allowing for <br/>
              allowing for user interation and response<br/> 
            </Card.Text>
            <a href="https://openprocessing.org/sketch/848097/" target="_blank">
              <Button variant="primary">Try Feeding Piggy</Button>
            </a>

             {/*Technologies used */}
             <Card.Title>Technoligies Used</Card.Title>
            <ListGroup horizontal>
              <ListGroup.Item>Processing.js</ListGroup.Item>

            </ListGroup>

          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Projects;
