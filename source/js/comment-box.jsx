import React from 'react';
import CommentForm from './comment-form';
import CommentList from './comment-list';

class CommentBox extends React.Component {
  render() {
    return (
      <div className="comment-box">
        Hello World, I am a comment box.
        <CommentForm />
        <CommentList data={this.props.data} />
      </div>
    );
  }
}

export default CommentBox;
