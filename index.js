var express    = require('express')
var serveIndex = require('serve-index')
var serveStatic = require('serve-static')

const port = process.env.PORT || 3000

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
// app.use('/', express.static('/'), serveIndex('assets', {'icons': true}))
app.use(serveStatic('public/ftp', { 'index': ['default.html', 'default.htm'] }))


// Listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

