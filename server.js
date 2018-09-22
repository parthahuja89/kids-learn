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
console.log('Someone connected to server');
socket.on('emit', function(data){
io.emit('reception',data)
  })
});

var chat_room = io.of('/chatroom');
chat_room.on('connection',function(socket){
console.log('someone connected to the chatroom');
socket.emit('welcome' , 'You connected to the chatroom!');
socket.on('send_message', function(message){
    console.log('got message');
    socket.broadcast.emit('recieve_message', message);
}
);
});
io.on('disconnect', function(socket){
console.log(' player disconnected');
});
