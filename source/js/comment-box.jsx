import {polyfill} from 'es6-promise';
import React from 'react';
import assign from 'lodash.assign';
import CommentForm from './comment-form';
import CommentList from './comment-list';

polyfill();

import 'whatwg-fetch';

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

  handleCommentSubmit(comment) {
    let comments = this.state.data;
    let newData  = assign(comment, { key: comments.length + 1 })
    comments.push(newData);
    this.setState(comments);


    fetch('/comments.json', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(comment)
    }).then(resp => resp.json())
      .then(json => console.log(json));
  }

  componentDidMount() {
    this.loadCommentsFromServer();

    if (this.props.pollInterval) {
      this.pollTimer = setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
    }
  }

  render() {
    return (
      <div className="comment-box">
        Hello World, I am a comment box.
        <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
        <CommentList data={this.state.data} />
      </div>
    );
  }
}

export default CommentBox;
