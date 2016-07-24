import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return(
      <div>
        {this.props.id}: {this.props.title} | {this.props.username}
      </div>
    )
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  description: React.PropTypes.string
}
