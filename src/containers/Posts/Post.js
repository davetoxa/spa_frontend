import React, { Component } from 'react'
import PropTypes from 'prop-types';

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
  id: PropTypes.number.isRequired,
  description: PropTypes.string
}
