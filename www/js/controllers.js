angular.module('IPLAPP.controllers', [])

.controller('teamCtrl',function($scope, $firebaseObject,iplService,imageService,$ionicHistory,$ionicLoading) {
  console.log("calling");
    var ref = firebase.database().ref('tean_info');

    var syncObject = $firebaseObject(ref);
     $ionicLoading.show({
             template:' <ion-spinner icon="spiral"></ion-spinner>'
             });
    syncObject.$loaded().then(function(result) {
              $ionicLoading.hide();
        $scope.data = result;
  //  });
    // $scope.changeTeam=function(teamName){
    //   //console.log(teamName);
    //     iplService.setTeam(teamName);
    // }
    $scope.myGoBack = function() {
        $ionicHistory.goBack();
      };
      $ionicLoading.show({
              template:' <ion-spinner icon="spiral"></ion-spinner>'
              });

    $scope.getImage = function(image) {

              console.log('function called');
              var url = imageService.getUrl(image).then(function(url) {

                  document.getElementById(image).src = url;
                  console.log(url);
                  // $scope.actualUrl(url);
                  $scope.iUrl = url;
                  console.log($scope.iUrl);
                  return $scope.iUrl;
              });
              // return iUrl;
          }
           $ionicLoading.hide();
          $scope.images = {};
          angular.forEach(result, function(i) {
              imageService.getUrl(i.team_img_url).then(function(url) {
                  $scope.images[i.team_img_url] = url;
              });
          });
        });
        //  console.log($scope.images);
          // $scope.actualUrl = function(url){
          //   return url;
      var storage = firebase.storage();
      var storageRef = firebase.storage().ref();
      //console.log(storageRef);
      // $ionicLoading.show({
      //         template:' <ion-spinner icon="spiral"></ion-spinner>'
      //         });
      storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
        // $ionicLoading.hide();
          //console.log(url);
          // Get the download URL for 'images/stars.jpg'
          // This can be inserted into an <img> tag
          // This can also be downloaded directly
      }).catch(function(error) {
          console.log("Error" + error);
      });
    })
    .controller('playerListCtrl',function($scope, $firebaseObject,iplService,imageService,$stateParams,$ionicHistory){
      $scope.teamName=$stateParams.teamname.replace(/\s/g, '');
var ref = firebase.database().ref($scope.teamName);

var temp = $firebaseObject(ref);
var fbref1 = firebase.database().ref("tean_info");
fbref1.orderByChild("team_name").equalTo($stateParams.teamname).on("child_added", function(data) {
//  console.log(data);
 $scope.data1 = data.val();
console.log("hiiii");
});

temp.$loaded().then(function(result) {
  $scope.myGoBack = function() {
      $ionicHistory.goBack();
    };
 $scope.data = result;
          $scope.images={};
        });
 $scope.getImage = function(image) {

           console.log('function called');
           var url = imageService.getUrl(image).then(function(url) {
               document.getElementById(image).src = url;
             });
           }
         });
       //         console.log(url);
       //         // $scope.actualUrl(url);
       //         $scope.iUrl = url;
       //         console.log($scope.iUrl);
       //         return $scope.iUrl;
       //     });
       //     // return iUrl;
       // }
       // $scope.images = {};
       // angular.forEach(result, function(i) {
       //     imageService.getUrl(i.team_img_url).then(function(url) {
       //         $scope.images[i.team_img_url] = url;
       //     });
 //   .controller('teamInfoCtrl',function($scope,$firebaseObject,imageService,iplService){
 //     console.log("calling");
 //     var ref = firebase.database().ref();
 //
 //   var temp = $firebaseObject(ref);
 //
 //   temp.$loaded().then(function(result) {
 //       console.log(result);
 //       $scope.data = result.tean_info;
 //       console.log( result.tean_info);
 //       // var temp = result.tean_info;
 //       //$scope.data = temp[0];
 // $scope.getImage = function(image) {
 //
 //         //    console.log('function called');
 //             var url = imageService.getUrl(image).then(function(url) {
 //                 document.getElementById(image).src = url;
 //                 console.log(url);
 //                 // $scope.actualUrl(url);
 //                 $scope.iUrl = url;
 //                 console.log($scope.iUrl);
 //                 return $scope.iUrl;
 //             });
 //             // return iUrl;
 //       }
 //         $scope.images = {};
 //         console.log("images");
 //         angular.forEach(result.tean_info, function(i) {
 //             imageService.getUrl(i.team_img_url).then(function(url) {
 //                 $scope.images[i.team_img_url] = url;
 //             });
 //         });
 //     });
 //   });

       //  console.log($scope.images);
         // $scope.actualUrl = function(url){
         //   return url;
     // var storage = firebase.storage();
     // var storageRef = firebase.storage().ref();
     // //console.log(storageRef);
     // storageRef.child('DelhiDareDevils/amit_mishra.png').getDownloadURL().then(function(url) {
     //     //console.log(url);
     //     // Get the download URL for 'images/stars.jpg'
     //     // This can be inserted into an <img> tag
     //     // This can also be downloaded directly
     // }).catch(function(error) {
     //     console.log("Error" + error);
     // });

// .controller('ChatsCtrl', function($scope, Chats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//   console.log("chartdetails");
//
//   $scope.chats = Chats.all();
//   $scope.remove = function(chat) {
//     Chats.remove(chat);
//   };
// })

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   console.log("chatdetails");
//   $scope.chat = Chats.get($stateParams.chatId);
// })
//
// .controller('AccountCtrl', function($scope) {
//   console.log("accountdetails");
//   $scope.settings = {
//     enableFriends: true
//   }
// });
