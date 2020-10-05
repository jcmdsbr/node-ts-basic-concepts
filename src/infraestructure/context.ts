import * as mongoose from 'mongoose';

class MongoContext {
    _connectionString = 'mongodb+srv://admin:l1pvqgjuqPBX6Mrn@learningnode.wjaii.gcp.mongodb.net/LearningNode?retryWrites=true&w=majority'

    createConnection() : void {
        const options = {
            poolSize: 5,
            useNewUrlParser: true,
            useUnifiedTopology: true
        }

        mongoose.connect(this._connectionString, options);
        mongoose.set("useCreateIndex", true);
    }
}

export default new MongoContext();