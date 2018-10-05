const expect = require('expect');

const {Users} = require('./users');


describe('User', ()=>{
  var users;

  beforeEach( ()=>{
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id: '2',
      name: 'Jen',
      room: 'React Course'
    },{
      id: '3',
      name: 'Julie',
      room: 'Node Course'
    }];
  });

  it('should add new user', ()=>{
    var users = new Users();
    var user = {
      id: '123',
      name: 'Andrew',
      room: 'The office Fans'
    };

    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);

  });

  it('should remove a user ', ()=>{
    var user = users.removeUser(users.users[0].id);

    expect(users.users).not.toContain(user);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user', ()=>{
    var user = users.removeUser('4');

    expect(user).toBeFalsy();
    expect(users.users.length).toBe(3);
  });

  it('should find user', ()=>{
    var user = users.getUser(users.users[1].id);
    expect(user).toEqual(users.users[1]);
  });

  it('should not find user', ()=>{
    var user = users.getUser('5');
    expect(user).toBeFalsy();

  });

  it('should return names for node course', ()=>{
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike','Julie']);
  });

  it('should return names for react course', ()=>{
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });

});
