var express = require('express')
var morgan = require('morgan')

var app = express()

app.use(morgan('combined'))

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain')
	res.end('Home')
})

app.get('/test/:n', function (req, res) {
	var num =  parseInt(req.params.n)
	if (num.toString()!= 'NaN') {
		res.render('test.ejs', {message: 'test n°'+num});
	} else {
		res.status(400).render('test.ejs', {message: req.params.n + ' is not a number'})
	}
})

app.use(function(req, res, next){
	res.setHeader('Content-Type', 'text/plain')
	res.status(404).end('404 - Page Not Found')
})

app.listen(80)