import React from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render() {
    let commentNodes = this.props.data.map(comment => {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });

    return (
      <ol className="comment-list">
        {commentNodes}
      </ol>
    );
  }
}

export default CommentList;
