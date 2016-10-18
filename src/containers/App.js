import React, { Component } from 'react'
import 'whatwg-fetch'

import Post from './post'
import PostForm from './PostForm'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000/api'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = { posts: [] }

    this.addPost = this.addPost.bind(this)
  }

  componentDidMount() {
    this.loadPosts()
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

  addPost(data) {
    fetch(`${BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => {
      return res.json()
    }).then(post => {
      this.setState({ posts: this.state.posts.concat([post]) })
    }).catch(err => {
      console.log(err.toString())
    })
  }

  render() {
    return(
      <div>
        <h3>My first SPA application!</h3>
        {this.state.posts.map((post) =>{
          return <Post key={post.id} id={post.id} title={post.title} username={post.username}/>
        })}
        <PostForm onPostSubmit={this.addPost} />
      </div>
    )
  }
}
