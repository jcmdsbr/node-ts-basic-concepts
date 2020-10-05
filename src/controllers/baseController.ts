import * as HttpStatusCode from 'http-status';
import IResponseModel from '../domain/models/responseModel';

abstract class BaseController {
    async safeExecuteAsync(promise: Promise<IResponseModel>, statusCode: any, res: any) {
        try {
            const { data, messages } = await promise;
            return res.status(statusCode).json({ data, messages });

        } catch (error) {
            console.log(error)
            return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ messages: [error] });
        }
    }
}

export default BaseController;