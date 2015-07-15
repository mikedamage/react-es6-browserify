import React from 'react';
import marked from 'marked';

class Comment extends React.Component {
  render() {
    let rawMarkup = marked(this.props.children.toString(), { sanitize: true });

    return (
      <li>
        <h2>{this.props.author}</h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </li>
    );
  }
}

export default Comment;
