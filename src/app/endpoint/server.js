import config from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

/**
 *
 * @description Imported routes from /src/app/endpoint/routes
 *
 */
import SongRoute from './routes/song.route'

config.config()

const app = express()
const port = process.env.PORT || 3000

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))
// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }
  next()
})

/**
 *
 * @description Registered API routes
 *
 */
app.use('/', SongRoute)

app.use((req, res, next) => {
  const error = new Error('Route is invalid!')
  error.status = 404
  next(error)
})
app.use((error, req, res) => {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

app.listen(port, () => {
  console.log(`Express server is runnning on port ${port}`)
})

export default app
