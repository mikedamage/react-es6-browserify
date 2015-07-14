import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <li>
        <h2>{this.props.author}</h2>
        {this.props.children}
      </li>
    );
  }
}

export default Comment;
