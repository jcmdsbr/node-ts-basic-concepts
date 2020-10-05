import * as express from 'express';
import * as bodyParser from 'body-parser';

import MongoContext from './infraestructure/context';
import NewsController from './controllers/newsController';


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

export default new Startup();