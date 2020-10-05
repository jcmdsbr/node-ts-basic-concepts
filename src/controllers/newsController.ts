import NewsService from '../domain/services/newsServices';
import * as HttpStatusCode from 'http-status';
import INewsModel from '../domain/models/newsModel';
import BaseController from './baseController';
import newsServices from '../domain/services/newsServices';


class NewsController extends BaseController  {

    async getAsync(_req, res) {
        return await super.safeExecuteAsync(newsServices.getAsync(), HttpStatusCode.OK, res);
    }

    async getByIdAsync(req, res) {
        return await super.safeExecuteAsync( NewsService.getByIdAsync(req.params.id) , HttpStatusCode.OK, res);
    }

    async addAsync(req, res) {
        const vm = req.body as INewsModel;
        return await super.safeExecuteAsync(NewsService.addAsync(vm), HttpStatusCode.CREATED, res);
    }

    async updateAsync(req, res) {
        const vm = req.body as INewsModel;
        return await super.safeExecuteAsync(NewsService.updateAsync(req.params.id, vm), HttpStatusCode.OK, res);
    }

    async deleteAsync(req, res) {
        return await super.safeExecuteAsync(NewsService.deleteAsync(req.body), HttpStatusCode.NO_CONTENT, res);
    }
}

export default new NewsController();