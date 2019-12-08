var express    = require('express')
var serveIndex = require('serve-index')

const port = process.env.PORT || 3000

var app = express()

// Serve URLs like /ftp/thing as public/ftp/thing
// The express.static serves the file contents
// The serveIndex is this module serving the directory
app.use('/', express.static('assets/'), serveIndex('assets/', {'icons': true}))

// Listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

