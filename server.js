const cssnano = require('cssnano')
const express = require('express')
const path = require('path')
const postcssColorFunction = require('postcss-color-function')
const postcssCustomProperties = require('postcss-custom-properties')
const postcssImport = require('postcss-import')
const postcssMiddleware = require('postcss-middleware')

const app = express()

app.use('/styles', postcssMiddleware({
  src: (req) => {
    return path.join('styles', req.path)
  },
  plugins: [
    postcssImport,
    postcssCustomProperties,
    postcssColorFunction,
    cssnano
  ],
  options: {
    from: 'styles/main.css'
  }
}))

app.use(express.static('public'))

app.listen(3000, () => {
  console.log('Presentation running at http://localhost:3000/')
})
