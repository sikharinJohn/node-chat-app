const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', ()=>{
  it('should generate correct message object', ()=>{
    var from = 'John@example.com';
    var text = 'Test message';

    var message = generateMessage(from, text);

    expect(message.from).toEqual(from);
    expect(message.text).toEqual(text);
    expect(typeof message.createdAt).toBe('number');

  });
});

describe('generateLocationMessage', ()=>{
  it('should generate location correct message object', ()=>{
    var from = 'Admin';
    var latitude = 1;
    var longitude = 2;
    var url = `https://www.google.com/maps/?q=${latitude},${longitude}`;

    var message = generateLocationMessage(from, latitude, longitude);

    expect(message.from).toEqual(from);
    expect(message.url).toEqual(url);
    expect(typeof message.createdAt).toBe('number');
  });
});
