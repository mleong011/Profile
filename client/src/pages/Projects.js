import React, { useState } from "react";
import Iframe from 'react-iframe';
import "../App.css";
import { Card, Button, Carousel, ListGroup } from "react-bootstrap";
import cunyGallery from "../images/cunyGallery.png";
import cunyGalleryB from "../images/cunyGalleryB.png";
import yiyiBakery from "../images/yiyiBakery.png";
import feedingPiggy from "../images/feedingPiggy.png";
import feedingPiggyClip from "../images/feedingPiggyClip.gif";
import netflixCloneA from "../images/netflixCloneA.png";

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
            <ul> 
              <li>Designed and Implemented a Progressive Web Application (PWA) in a team of 4/
              </li>
              <li>
                Used Ionic React framework to create application UI components in Typescript.
              </li>
              <li>
                  Users are redirected to our app after scanning a QR code located on artwork
                  throughout cuny campuses for more information and ability to participate in a
                  scavenger hunt.
              </li>
              
              </ul>
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
              <Button variant="primary">Visit YiYi Bakery</Button><span>   </span> 
              <Button variant="primary">View Github Repo</Button>
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
              <Iframe url="https://openprocessing.org/sketch/848097/"
        width="500px"
        height="600px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
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

        <br/>
        <Card>
          <Card.Header as="h5">Netflix Clone</Card.Header>
          <Card.Body>
            <Card.Title></Card.Title>
            {/*images for application */}
            <Carousel>
              <Carousel.Item>
                <img src={netflixCloneA} alt="netflix-clone-a" width="400" />
              </Carousel.Item>
              <Carousel.Item>
                <img src={} alt="netflix-clone-b" width="400" />
              </Carousel.Item>
            </Carousel>
            {/*Project information */}
            <Card.Text>
            <ul> 
              <li>Created during the DataStax Netflix Clone Workshop
              </li>
              <li>
               Creating a database on Astra DB and deploying a netflix clone application using react to Netlify
              </li>
              <li>
                  Creating this app to learn about pagination with GraphQL to get data page by page enabling retrieval of fields without overhead.
              </li>
              
              </ul>
            </Card.Text>

            {/*Technologies used */}
            <Card.Title>Technoligies Used</Card.Title>
            <ListGroup horizontal>
              <ListGroup.Item>React JS</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>DataStax Astra DB</ListGroup.Item>
              <ListGroup.Item>Netlify</ListGroup.Item>
              <ListGroup.Item>Gitpod</ListGroup.Item>
            </ListGroup>

            {/*link to project */}
            <a href="https://clone-of-netflix.netlify.app" target="_blank">
              <Button variant="primary">Visit Netflix Clone</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Projects;
