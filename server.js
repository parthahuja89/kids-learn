var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 3500;
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/default.html');
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});

io.on('connection', function(socket){
console.log('new player connected');
  socket.on('emit', function(data){
io.emit('reception',data)

  })
});
io.on('disconnect', function(socket){
console.log(' player disconnected');
});
