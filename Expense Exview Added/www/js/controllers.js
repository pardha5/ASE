angular.module('starter.controllers', ['ionic', 'ui.router', 'starter.services'])

.controller('DashCtrl', function($scope) {})

.controller('LoginCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('RegisterCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('UpdateCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})


.controller('DeleteCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

    .controller('AddCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

 .controller('AddeCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('ExviewCtrl', function($scope,$http) {
 // $scope.settings = {
   // enableFriends: true
//};
    $http.get('https://api.mongolab.com/api/1/databases/expensetracker/collections/expense?apiKey=TBtDR-i4rKwMVVXGo4rvWkyPFyIt369K').
    success(function (data) {
        $scope.expenses = data;
    }) 
  $scope.remove = function(chat) {
    //Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AddgCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})

.controller('ChartCtrl', function($scope) {
 // $scope.settings = {
   // enableFriends: true
//};
})
    
    .controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('UpdateController', function ($scope, MongoRESTService) {
   /* $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }*/
  })
.controller('DeleteController', function ($scope, MongoRESTService) {
   /* $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }*/
  })

 .controller('LoginController', function ($scope, MongoRESTService, $state) {
    $scope.login = function (username, password) {
      console.log(username);
      var result = MongoRESTService.login(username, password, function (result) {
        console.log(result)
        if (result.length = 1) {
          $state.go('tab.dash');
        } else {
          alert('Sorry, check your credentials.')
        }

      });
    }
  })
  .controller('RegisterController', function ($scope, MongoRESTService,$state) {
    $scope.create = function (data) {
      var id = MongoRESTService.register(data);
      console.log(id);

    }
    $scope.takelog = function() {
  $state.go('login');
}
    
  })

 .controller('IncomeController', function ($scope, MongoRESTService) {
    $scope.Inadd = function (data) {
      var id = MongoRESTService.incomeadd(data);
      console.log(id);

    }
  })

.controller('ExpenseController', function ($scope, MongoRESTService) {
    $scope.Exadd = function (data) {
      var id = MongoRESTService.expenseadd(data);
      console.log(id);

    }
  })

.controller('GoalController', function ($scope, MongoRESTService) {
    $scope.Goaladd = function (data) {
      var id = MongoRESTService.goaladd(data);
      console.log(id);

    }
  })
;
  /*.controller('HomeCtrl', function ($scope, MongoRESTService) {
    $scope.user = {};

  })*/

 