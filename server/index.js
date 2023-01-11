var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);



io.on("connection", function(socket){
    var messages =[
        {
            'message_id' : 1,
            'user' : 'ehsan',
            'text' : 'hello'
        },
        {
            'message_id' : 2,
            'user' : 'esfsan',
            'text' : 'hello'
        },

    ]
    socket.emit('messages',messages);
    socket.on('new_message', function(data){
        messages.push(data);
        io.sockets.emit('messages' , messages);
    })
    console.log("new user connected");
});


app.use('/chat', express.static('app'));
server.listen(80);