const expect = require('expect');

const {generateMessage} = require('./message');

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
