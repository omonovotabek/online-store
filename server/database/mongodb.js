const mongoose = require('mongoose')
const config = require('config')
const MONGO_URI = config.get('MONGO_URI')

module.exports.connection = () => {
    mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDb connected...'))
    .catch(error => console.error(error)) 
}
