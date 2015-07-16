import 'whatwg-fetch';
import {polyfill} from 'es6-promise';
import React from 'react';
import CommentForm from './comment-form';
import CommentList from './comment-list';

polyfill();

class CommentBox extends React.Component {
  constructor() {
    super();

    this.pollTimer = 0;
    this.state     = { data: [] };
  }

  loadCommentsFromServer() {
    fetch(this.props.url)
      .then(resp => resp.json())
      .then(json => this.setState({ data: json }))
      .catch(err => console.error(err, err.toString()));
  }

  componentDidMount() {
    this.loadCommentsFromServer();

    if (this.props.pollInterval) {
      this.pollTimer = setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }
  }

  render() {
    return (
      <div className="comment-box">
        Hello World, I am a comment box.
        <CommentForm />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
