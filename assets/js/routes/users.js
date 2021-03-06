// configure the application
app.config(function($stateProvider) {

  /**
   * Users
   */
  $stateProvider.state('users', {
    url: '/users',
    resolve: {
      users: function($http) {
        return $http.get('api/users').then(function(response) {
          return response.data;
        });
      }
    },
    templateUrl: 'views/users/index',
    controller: 'UsersController'
  });

  $stateProvider.state('users.modal', {
    abstract : true,
    onEnter : function($rootScope) {
      $rootScope.modal = true;
    },
    onExit : function($rootScope) {
      $rootScope.modal = false;
    }
  });

  $stateProvider.state('users.modal.add', {
    url: '/add',
    views: {
      'modal@' : {
        templateUrl: 'views/users/add',
        controller: 'AddUserController'
      }
    }
  });

  $stateProvider.state('users.modal.edit', {
    url: '/edit/:username',
    views: {
      'modal@' : {
        resolve: {
          user: app.fetchUser
        },
        templateUrl: 'views/users/edit',
        controller: 'EditUserController'
      }
    }
  });

  $stateProvider.state('users.modal.delete', {
    url: '/delete/:username',
    views: {
      'modal@' : {
        resolve: {
          user: app.fetchUser
        },
        templateUrl: 'views/users/delete',
        controller: 'DeleteUserController'
      }
    }
  });

  $stateProvider.state('users.modal.avatar', {
    url: '/avatar/:username',
    views: {
      'modal@' : {
        resolve: {
          user: app.fetchUser
        },
        templateUrl: 'views/users/avatar',
        controller: 'AvatarController'
      }
    }
  });

});