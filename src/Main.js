import React, { Component } from "react";
import {
  Link
} from "react-router-dom";


class Main extends Component {
  render() {
    return (
      // <HashRouter>
      <div>
        <div>
          <h1 className="blog-heading">My latest blog posts</h1>
        </div>
        <div className="blog-posts">
          <div className="post">
            <Link to="/programming">
              <img className="blog-post-image" src={require('./images/coding.png')}></img>
            </Link>
            <Link to="/programming" className="title-link">
              <h1 className="post-title">Why I Love Programming?</h1>
            </Link>
            <div className="center"><time datetime="2019-03-28">Mar 28, 2019</time></div>
            <p>
              Programming has many faces. It is the science of structured thinking.
              It is the art of eloquent expression..
            <Link to="/programming">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/hobbies">
              <img className="blog-post-image" src={require('./images/hobbies.jpg')}></img>
            </Link>
            <Link to="/hobbies" className="title-link">
              <h1 className="post-title">Let’s talk about HOBBIES</h1>
            </Link>
            <div className="center"><time datetime="2019-04-08">Apr 08, 2019</time></div>
            <p>
              I've been passionate about hobbies my whole life. I love learning, collecting, researching and ..
            <Link to="/hobbies">
                Read More
            </Link>
            </p>
          </div>
          <div className="post">
            <Link to="/people">
              <img className="blog-post-image" src={require('./images/admire.png')}></img>
            </Link>
            <Link to="/people" className="title-link">
              <h1 className="post-title">People that I ADMIRE</h1>
            </Link>
            <div className="center"><time datetime="2019-04-15">Apr 15, 2019</time></div>
            <p>
              Whether it’s a writer whose blog posts are always relatable, a public speaker whose workshops are..
            <Link to="/people">
                Read More
            </Link>
            </p>
          </div>
          <div className="clear-fix">
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
