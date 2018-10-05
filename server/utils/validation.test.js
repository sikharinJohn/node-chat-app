const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', ()=>{
 it('should reject non-string values', ()=>{
  var value = 1234;
  var validate = isRealString(value);
  expect(validate).toBeFalsy();
 });

 it('should reject string with only spaces', ()=>{
  var value = '   ';
  var validate = isRealString(value);
  expect(validate).toBeFalsy();
 });

  it('should allow string with non-space characters', ()=>{
   var value = 'learn NodeJS';
   var validate = isRealString(value);
   expect(validate).toBeTruthy();
  });

});
