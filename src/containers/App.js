import React, { Component } from 'react'
import 'whatwg-fetch'

import Post from './post'
import PostForm from './PostForm'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/api'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }
  }

  loadPosts() {
    fetch(`${BASE_URL}/posts`)
      .then(res => {
        return res.json()
      }).then(posts => {
        this.setState({ posts: posts })
      }).catch(err => {
        console.log(err.toString())
      })
  }

  componentDidMount() {
    this.loadPosts()
  }

  render() {
    return(
      <div>
        <h3>My first SPA application!!!</h3>
        {this.state.posts.map((post) =>{
          return <Post key={post.id} id={post.id} title={post.title} />
        })}
        <PostForm />
      </div>
    )
  }
}
