import React from 'react';

class CommentForm extends React.Component {
  constructor() {
    super();
  }

  handleSubmit(e) {
    e.preventDefault();

    let author = React.findDOMNode(this.refs.author);
    let text   = React.findDOMNode(this.refs.text);

    if (!text || !author) return;

    this.props.onCommentSubmit.call(this, {
      author: author.value,
      text: text.value
    });

    author.value = '';
    text.value   = '';

    return;
  }

  render() {
    return (
      <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Your Name" ref="author" />
        <input type="text" placeholder="Say something&hellip;" ref="text" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default CommentForm;
