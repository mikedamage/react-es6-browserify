// Doing React stuff

import React from 'react';
import HelloWorld from './hello-world';
import CommentBox from './comment-box';

let data = [
  { author: 'Mike Green', text: 'This __is__ a comment with _Markdown_.' },
  { author: 'Marcus Aurelius', text: 'This is another comment with a [link](http://google.com).' }
];

React.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
