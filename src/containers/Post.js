import React, { Component } from 'react'

export default class Post extends Component {
  render() {
    return(
      <div>
        {this.props.id}: {this.props.name}
      </div>
    )
  }
}

Post.propTypes = {
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}
