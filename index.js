var express = require('express');
var socket= require('socket.io');
var app = express();
var server = app.listen(3000 , function(){
    console.log("listening");
});

app.use(express.static('public'));

var io = socket(server);
io.on('connection',function(socket){
    console.log("socket connection made");

    socket.on('msg' , function(data){
        io.sockets.emit('msg' , data);
    });

    socket.on('typing' , function(data){
        socket.broadcast.emit('typing' ,data);
    })
});
