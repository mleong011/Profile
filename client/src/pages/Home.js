//should become Home page/profile
import React, { createFactory } from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import CasualProfile from '../images/CasualProfile.jpg';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import google from '../images/google.png';
import { Image, Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import '../Home.css';


class Home extends React.Component {

  render() {

    return (
      <div className="container-fluid justify-content-right bg-img">
        
        <div>

          <div className="profile-img-container">
          <Image src={CasualProfile}  alt="profile" roundedCircle className="profile-image"/>

          <Card className="Centered profile-card" >
          <Card.Title className="name">Mary Leong</Card.Title>
          <Card.Subtitle>Software Developer</Card.Subtitle>
          <Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroupItem>
          <Card.Text className="scroll">
          Hello! I am a recent computer science graduate from CUNY Brooklyn College and a current fellow at CUNY Tech Prep. I am passionate 
          about creating responsive, user friendly applications using a variety of programming languages and frameworks. Currently working on
          creating a web application that provides users a hub containing information and tracking on all online orders by connecting to a gmail
          account. This is being created using Javascript, ReactJS, Node.js, and Sequelize. Other technologies I am familar with include Java, 
          C++, Bootstrap, Flask framework, and many more, Please see projects for more information.<br/>
          If you're looking for a computer programmer who is passionate about her work and loves to continues learning new 
          technologies as well as expanding her knowledge through new experiences, look no further! <br/>
          Please do not hesitate to reach out to me about anything. <br/>

          As I continue to develop my skill set, I hope to apply my skills to aid in creating applications that make people's lives easier. 

          
          When I am not hunched over my computer programming, you can find me out in the park training for my next 5K run, trying out
          new pastery recipes, or catching up with my family and peers.<br/>

          My career interests include:<br/> 
          <ul>
          <li>Front-end Development</li> 
          <li>Full Stack Web Development</li> 
          <li>Multimedia Computing </li> 
          <li>UX Design</li> 
          </ul>
          </Card.Text>
          </ListGroupItem>
          <ListGroupItem >
          <Card.Link href="https://github.com/mleong011"><Image src= {github} alt="github" className="social-media"/> </Card.Link>
          <Card.Link href="https://www.linkedin.com/in/maryleong011/"><Image src= {linkedin} alt="linkedin" className="social-media"/></Card.Link>
          <Card.Link href="https://www.facebook.com/Maryleong193"><Image src= {facebook} alt="facebook" className="social-media"/></Card.Link>
          <Card.Link href="https://www.instagram.com/maryleongg/"><Image src= {instagram} alt="instagram" className="social-media"/></Card.Link>
          <Card.Link href="mailto: mleong011@gmail.com"><Image src= {google} alt="email" className="social-media"/></Card.Link>
          </ListGroupItem>
          <ListGroupItem>
            <Button variant="primary" href="./Projects">Projects</Button>
            <span>  </span>
            <Button variant="primary" href="./Education">Education</Button>
            <span>  </span>
            <Button variant="primary" href="../Resume">Resume</Button>
          </ListGroupItem>

          </ListGroup>
          </Card.Body>

          </Card>
          </div>
          </div>

      </div>
    );
  }
}

export default Home;