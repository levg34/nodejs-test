var http = require('http')
var fs = require('fs')

// loading index.html displayed to client
var server = http.createServer(function(req, res) {
	fs.readFile('./index.html', 'utf-8', function(error, content) {
		res.writeHead(200, {"Content-Type": "text/html"})
		res.end(content)
	});
});

// loading socket.io
var io = require('socket.io').listen(server);

// on client connection
io.sockets.on('connection', function (socket) {
	console.log('Client connected!');
	socket.emit('message', 'You are connected.')
	socket.broadcast.emit('message', 'Someone else joined the chat')
	
	socket.on('new_client', function(nickname) {
        socket.nickname = nickname;
    })
	
	socket.on('message', function (message) {
		console.log('Message from '+socket.nickname+': ' + message)
	})
	
});


server.listen(8080)