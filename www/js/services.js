angular.module('IPLAPP.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
}).factory('imageService',function(){

       var url= {};
          return {
          getUrl: function(image) {
            var storage = firebase.storage();
            var storageRef = firebase.storage().ref();
            return storageRef.child(image).getDownloadURL().then(function(url) {
                return url;
            }).catch(function(error) {
                console.log("Error" + error);
            });
        }
    }
}).factory('iplService',function(){
     var team;
       return {
       setTeam: function(teamName) {
         console.log(teamName);
           this.team = teamName.replace(/\s/g, '');
           console.log(this.team);
           return this.team
       },
       getTeam: function() {
         console.log(this.team);
           return this.team;
       }
     }
});
