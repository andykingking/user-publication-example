Meteor.methods({
  'createUsers': function(){
    var users = [
      {
        email:    'beyonce@jayonce.com',
        password: 'drunkInLove'
      },
      {
        email:    'jay@jayonce.com',
        password: '99problems'
      }
    ];
    users.forEach(function(user){
      var id = Accounts.createUser(user);
      var createdUser = Meteor.users.findOne(id);
      console.log('Created user: ' + JSON.stringify(createdUser));
    });
  },
  'resetDatabase': function(){
    console.log('Resetting database...');

    var collectionsRemoved = 0;
    var db = Meteor.users.find()._mongo.db;
    db.collections(function (err, collections) {

      var appCollections = _.reject(collections, function (col) {
        return col.collectionName.indexOf('velocity') === 0 ||
          col.collectionName === 'system.indexes';
      });

      _.each(appCollections, function (appCollection) {
        appCollection.remove(function (e) {
          if (e) {
            console.error('Failed removing collection', e);
            fut.return('fail: ' + e);
          }
          collectionsRemoved++;
          if (appCollections.length === collectionsRemoved) {
            console.log('Finished resetting database');
          }
        });
      });
    });
  }
});
