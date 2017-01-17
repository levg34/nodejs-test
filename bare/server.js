var http = require('http')
var url = require('url')

function start(route, handle) {
	var port = 8888

	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname
		console.log('request for ' + pathname + ' received.')
		route(handle, pathname, response, request)
	}

	http.createServer(onRequest).listen(port)
	console.log('server started on port ' + port)
}

exports.start = start
