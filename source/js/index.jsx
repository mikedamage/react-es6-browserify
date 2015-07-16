// Doing React stuff

import React      from 'react';
import HelloWorld from './hello-world';
import CommentBox from './comment-box';

React.render(
  <CommentBox url="/comments.json" pollInterval={2000} />,
  document.getElementById('content')
);
