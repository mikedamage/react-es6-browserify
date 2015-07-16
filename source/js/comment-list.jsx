import map     from 'lodash.map';
import React   from 'react';
import Comment from './comment';

class CommentList extends React.Component {
  render() {
    let commentNodes = map(this.props.data, comment => {
      return (
        <Comment key={comment.key} author={comment.author}>
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
