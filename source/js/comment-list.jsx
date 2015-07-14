import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render() {
    return (
      <ol className="comment-list">
        <Comment author="Mike Green">This is a comment.</Comment>
      </ol>
    );
  }
}

export default CommentList;
