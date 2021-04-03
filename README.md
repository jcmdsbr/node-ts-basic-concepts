# The Node basic concepts in ts using mongodb :sunglasses:
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

class Startup {
    
    app: express.Application;

    constructor() {
        this.app = express();
        this.configureServices();
        this.configure();
    }

    configureServices() {
        MongoContext.createConnection();
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    configure() {
        this.app.route('/').get((req, res) => {
            return res.send({ version: '0.0.1' });
        });

        // news
        this.app.route('/api/v1/news').get(NewsController.getAsync);
        this.app.route('/api/v1/news/:id').get(NewsController.getByIdAsync);
        this.app.route('/api/v1/news').post(NewsController.addAsync);
        this.app.route('/api/v1/news/:id').put(NewsController.updateAsync);
        this.app.route('/api/v1/news/:id').delete(NewsController.deleteAsync);
    }
}
```
### Official Links :construction:

- [child_process.fork](https://nodejs.org/api/child_process.html#child_process_child_process_fork_modulepath_args_options)
- [cluster](https://nodejs.org/api/cluster.html)
- [Event Machine](https://github.com/eventmachine/eventmachine)
- [Twisted](https://twistedmatrix.com/trac/)
