const compression = require('compression')
const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const hbs = require('hbs')

const PORT = process.env.PORT || 3000

const server = express()

server.set('views', path.join(__dirname, 'views'))
  .set('layout', 'layout')
  .set('view engine', 'html')
  .engine('html', hbs.__express)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(helmet())
  .use(compression())
  .use('/bower_components', express.static(path.join(__dirname, 'bower_components')))
  .use('/static', express.static(path.join(__dirname, 'static')))
  .get('/', (req, res) => res.render('layout'))
  .listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
  })
