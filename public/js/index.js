var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'john@example.com',
    text: 'Hey, This is John'
  });
});

socket.on('disconnect', function(){
  console.log('Disconnect from server');
});

socket.on('newMessage', function(message){
  console.log('New Message ', message);
})
