const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config.js')
const bodyParser = require('body-parser')
const express = require('express')
const webpack = require('webpack')
const path = require('path')

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
const app = express()

app.use(express.static('assets'))

if(isDeveloping) {
    const compiler = webpack(config)
    const middleware = webpackMiddleware(compiler, {
        publicPath: config.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    })

    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('/', (req, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
        res.end()
    })
}
else {
        app.get('/', function response(req, res) {
        res.sendFile(path.join(__dirname, 'dist/index.html'))
    })
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Cache-Control', 'no-cache')
    next()
})

app.listen(port, '0.0.0.0', (err) => {
    if (err) console.log(err)
    console.info('*** Listening on port %s ***', port)
})
