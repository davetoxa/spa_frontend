import React, { Component } from 'react'
import Post from './post'
import PostForm from './PostForm'

import { posts } from './data'

export default class App extends Component {
  render() {
    return(
      <div>
        <h3>My first SPA application!!!</h3>
        {posts.map((post) =>{
          return <Post key={post.id} id={post.id} name={post.name} />
        })}
        <PostForm />
      </div>
    )
  }
}
