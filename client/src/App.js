import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import Home from './pages/Home';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Education from './pages/Education';

import './App.css';
import { Navbar } from 'react-bootstrap';


function Navigation(props) {
  return (
    <Navbar className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3" sticky="top">
      <Link className="navbar-brand" to="/">Mary Leong</Link>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/projects">
            Projects 
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink className="nav-link" exact to="/posts/new">
            Create a Micro Post
          </NavLink>
        </li> */}

        <li className="nav-item">
          <NavLink className="nav-link" exact to="/education">
            Education 
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/contact">
            Contact 
          </NavLink>
        </li>
      </ul>
    </Navbar>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div className="container-fluid text-center">
            <div className="row justify-content-center navbar-margin">
              <Switch>
                <Route path="/posts/new" component={PostFormPage} />
                <Route path="/projects" component={Projects} />
                <Route path="/education" component={Education} />
                <Route path="/posts/:id" component={ShowPostPage} />
                <Route path="/contact" component={Contact} />
                <Route path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
