describe('testing user publications', function(){

  beforeEach(function(done){
    Meteor.call('createUsers', function(){
      done();
    });
  })

  it('should be able to see both users', function(){
    var users = Meteor.users.find();
    expect(users.count()).toBe(2);
    users.forEach(function(user){
      expect(user.emails).toBeDefined();
    });
  });

  afterEach(function(done){
    Meteor.call('resetDatabase', function(){
      done();
    });
  });

});
