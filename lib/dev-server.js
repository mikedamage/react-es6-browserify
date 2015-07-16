/* jshint node: true */
/**
 * Middleware for BrowserSync. Simulates the presence of a JSON API server
 */

'use strict';

var url = require('url');

var comments = [
  { key: 1, author: 'Mike Green', text: 'This is a _comment_ with __Markdown__.' }
];

module.exports = function devServer(req, res, next) {
  var status;
  var parsedURL = url.parse(req.url);
  var method    = req.method;
  var body      = '';

  // GET /comments.json
  if (method === 'GET' && parsedURL.pathname.match(/comments\.json$/)) {
    console.log('GET /comments.json');

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(comments))
  }

  // POST /comments.json
  if (method === 'POST' && parsedURL.pathname.match(/comments\.json$/)) {
    console.log('POST /comments.json');

    req.on('data', function(chunk) {
      body += chunk.toString();
    });

    req.on('end', function() {
      var comment = JSON.parse(body);
      comment.key = comments.length + 1;
      comments.push(comment);

      status = { status: 'OK', message: 'Comment added!' };
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(status));
    });

    console.log('Added new comment. Total: %d', comments.length);
  }

  // DELETE /comments.json
  if (method === 'DELETE' && parsedURL.pathname.match(/comments\.json$/)) {
    console.log('DELETE /comments.json');
    comments.pop();
    res.end(JSON.stringify({ status: 'OK', message: 'Deleted most recent comment' }));
  }

  next();
};
