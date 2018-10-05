var socket = io();

socket.on('connect', function(){
  console.log('Connected to server');

});

socket.on('disconnect', function(){
  console.log('Disconnect from server');
});

socket.on('newMessage', function(message){
  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = jQuery('#massage-template').html();
  var html = Mustache.render(template, {
    text: message.text,
    from: message.from,
    createdAt: formattedTime
  });

  jQuery('#messages').append(html);
});

socket.on('newLocationMessage', function(message){
  var formattedTime = moment(message.createdAt).format('h:mm a');

  var template = jQuery('#location-massage-template').html();
  var html = Mustache.render(template, {
    url: message.url,
    from: message.from,
    createdAt: formattedTime
  });

  jQuery('#messages').append(html);
});

// socket.emit('createMessage', {
//   from: 'Frank',
//   text: 'Hello from Frank'
// }, function(data){
//   console.log('Got it',data);
// });

jQuery("#message-form").on('submit', function (e){

  e.preventDefault();
  var messageTextBox = jQuery('[name=message]');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function(){
    messageTextBox.val('');
  });

});



var locationButton = jQuery('#send-location');

locationButton.on('click', function(e){
  if(!navigator.geolocation){

    return alert('Geolocation not support by your browser');
  }

  locationButton.attr('disabled', 'disabled').text('Sending location...');

  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    locationButton.removeAttr('disabled').text('Send location');
    socket.emit('createLocationMessage',{
    latitude: position.coords.latitude,
    longitude: position.coords.longitude});
  }, function (){
    locationButton.removeAttr('disabled').text('Send location');
    alert('Unable to fetch your location');
  })

});
