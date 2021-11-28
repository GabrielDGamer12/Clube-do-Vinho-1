const mongoose = require('mongoose')
//const { mongoPath } = require('@root/config.json')

module.exports = async () => {
  await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}