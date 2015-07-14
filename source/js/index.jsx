// Doing React stuff

import React from 'react';
import HelloWorld from './hello-world';
import CommentBox from './comment-box';

React.render(
  <CommentBox />,
  document.getElementById('content')
);
