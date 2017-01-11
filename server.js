var http = require("http")

function start() {
	var port = 8888

	http.createServer(function (request, response) {
		console.log('request received.')
		response.writeHead(200, {'Content-Type': 'text/plain'})
		response.write('I love my wife.')
		response.end()
	}).listen(port)

	console.log('server started on port ' + port)
}

exports.start = start
