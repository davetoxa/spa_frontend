import React, { Component } from 'react'

export default class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = { title: '', username: '' }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const title = this.state.title.trim()
    const username = this.state.username.trim()
    if (!title || !username) {
      return
    }
    this.props.onPostSubmit(this.state)
    this.setState({title: '', username: ''})
  }

  render() {
    return(
      <form className="PostForm" onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.title} onChange={this.handleTitleChange} placeholder="Title" />
        <input type="text" value={this.state.username} onChange={this.handleUsernameChange} placeholder="Username" />
        <input type="submit" value="Post" className="btn"/>
      </form>
    )
  }
}
