import NewsRepository from '../../infraestructure/repositories/newsRepository';
import NewsModel from '../models/newsModel';
import IResponseModel from '../models/responseModel';

class NewsService {
    
    _message = "action successfully performed";

    async getAsync() : Promise<IResponseModel> {
        const data = await NewsRepository.find({});
        return { data, messages: [] };
    }

    async getByIdAsync(_id: string): Promise<IResponseModel> {
        const data = await NewsRepository.findById(_id);
        return { data, messages: [] };
    }

    async addAsync(news: NewsModel): Promise<IResponseModel> {
        const data = await NewsRepository.create(news);
        return { data, messages: [this._message] };
    }

    async updateAsync(_id: string, news: NewsModel): Promise<IResponseModel> {
        const data = await NewsRepository.findByIdAndUpdate(_id, news);
        return { data, messages: [this._message] };
    }

    async deleteAsync(_id: string): Promise<IResponseModel> {
        const data = await NewsRepository.findByIdAndRemove(_id);
        return { data, messages: [this._message] };
    }
}

export default new NewsService();