import React, { Component } from "react";
import Nav from './components/layout/Nav'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Projects from './components/pages/Projects'
// import Skills from './components/pages/Resume'
import ResumeContainer from './containers/ResumeContainer'
import BlogContainer from './containers/BlogContainer'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import './App.css';
import { Route } from 'react-router-dom'

// helper
import getMediumBlogPosts from './utilities/getMediumBlogPosts.js'


class App extends Component {
  state = {
    posts: [],
  }

  async componentDidMount(){
    this.setState({ 
      posts: await getMediumBlogPosts()
    })
  }

  render(){
    return(
      <div>
        <Nav />
        <br />
        <Route exact path="/" render={ () => <Home /> } />
        <Route exact path="/about" render={ () => <About /> } />
        <Route exact path="/projects" render={ () => <Projects /> } />
        <Route exact path="/resume" render={() => <ResumeContainer />} />
        <Route exact path="/blogs" render={() => <BlogContainer posts={this.state.posts}/>} />
        <Route exact path="/blog/:id" render={ () => <BlogPost posts={ this.state.posts }/> }/>
        <Route exact path="/contact" render={ () => <Contact/> }/>
      </div>
    )
  }
}

export default App