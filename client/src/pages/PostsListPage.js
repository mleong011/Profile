//should become Home page/profile
import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import '../App.css';
import CasualProfile from '../images/CasualProfile.jpg';


class PostsListPage extends React.Component {
  // state = {
  //   posts: [],
  //   loading: true,
  // }

  // componentDidMount() {
  //   fetch("/api/posts")
  //     .then(res => res.json())
  //     .then(posts => {
  //       this.setState({
  //         loading: false,
  //         posts: posts.map((p,ii) => <Post {...p} key={ii} />),
  //       });
  //     })
  //     .catch(err => console.log("API ERROR: ", err));
  // }

  render() {
    // if(this.state.loading) {
    //   return <Loading />;
    // }

    return (
      <div className="container-fluid justify-content-right">
        
        {/* start of home page content */}
        
        <div>
          <h3>Mary Leong Software Developer</h3>
          <img src={CasualProfile} width="400" alt="profile"/>
          <pre>
          I am an aspiring Frontend Developer student currently studying at Brooklyn College and a fellow at CUNY Tech Prep Program.<br/> 
          I am passionate about creating user friendly applications by creating interactive user interfaces using frameworks including <br/> 
          flask and react.<br/> <br/> 
          
          Being a fellow at CUNY Tech Prep Program, I am expanding my experience in using javascript and technologies including react, <br/> 
          node.js, and postgresql. As an undergraduate computer science student at Brooklyn College, I have taken courses to learn Java, <br/> 
          C++, and Javascript programming languages. Course projects and hackathons have increased my knowledge in using frameworks including <br/> 
          flask, maven, and ionic. While creating these applications I especially enjoyed creating an enjoyable and easy to use user interface <br/> 
          using HTML, CSS, Bootstrap, and Javascript.<br/> <br/> 
          
          I began my education at CUNY Hunter College and earned my Bachelors of Science in Nutrition and Food Science with a <br/> 
          minor in Psychology. After a year in the health field I became enamored with the tech field and decided to continue my <br/> 
          education to attain a degree in computer science. With a background in the health field I also have interests in entering <br/> 
          the health tech field.<br/> <br/> 

          As I continue to develop my skill set, I hope to apply my skills to aid in creating applications that make people's lives easier. <br/> <br/> 

          My career interests include:<br/> <br/> 
          <ul>
          <li>Front-end Development</li> 
          <li>Full Stack Web Development</li> 
          <li>Multimedia Computing </li> 
          <li>Front-end Development</li> 
          </ul>
        </pre>
        </div>
        {/* End of edits */}
        {/* <div className="row justify-content-center">
          { this.state.posts }
        </div> */}
      </div>
    );
  }
}

export default PostsListPage;