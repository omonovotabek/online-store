const app = require('./third-party.middlewares');
const userRouter = require('../routes/userRouter');
const typeRouter = require('../routes/typeRouter');
const deviceRouter = require('../routes/deviceRouter');
const brandRouter = require('../routes/brandRouter');
const errorHandler = require('./custom.middlewares/error.middleware')

app.use('/api', userRouter)
app.use('/api', typeRouter)
app.use('/api', deviceRouter)
app.use('/api', brandRouter)

app.use(errorHandler)

module.exports = app;