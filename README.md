# The Node basic concepts in typescript :sunglasses:
 - Learning basic concepts in typescript to create a rest api in node

## Give a Star! :star:

If you liked the project, please give a star ;)

## You need some of the fallowing tools :exclamation:

-  Visual Studio Code
-  Node 8+

## Description :books:

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build
scalable network applications. In the following "hello world" example, many
connections can be handled concurrently. Upon each connection, the callback is
fired, but if there is no work to be done, Node.js will sleep.

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
### Official Links :construction:

- [child_process.fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
- [cluster](https://nodejs.org/api/cluster.html)
- [Event Machine](https://github.com/eventmachine/eventmachine)
- [Twisted](https://twistedmatrix.com/trac/)
