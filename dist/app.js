angular.module('skorohod', [
        'ui.router'
    ])
    .controller('skorohodController', ['$scope', 'skorohodService', '$state', function($scope, skorohodService, $state){
        $scope.proba = "hello";
        $scope.open = function(num){
            switch (num){
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                case 5:
                    break;
                default:
                    break;
            }
        };
    }])
    .config(function ($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: "templates/application.html"
            })
            .state('analitics', {
                url: "/app/analitics",
                views: {
                    '':{
                        templateUrl: "templates/analitics.html"
                    },
                    'inset@analitics':{
                        template: "Hello"
                    }
                }
            })
            .state('data', {
                url: "/app/data",
                templateUrl: "templates/data.html"
            })
            .state('server-code', {
                url: "/app/server-code",
                templateUrl: "templates/serverCode.html"
            })
            .state('push', {
                url: "/app/push",
                templateUrl: "templates/push.html"
            })
            .state('settings', {
                url: "/app/settings",
                templateUrl: "templates/settings.html"
            });


        $urlRouterProvider.otherwise('/');
    }).run(function($rootScope){
        $rootScope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams, options){
                if(toState.name == "main"){
                    var list = document.getElementsByClassName('insets')[0].classList;
                    for(var i =0; i < list.length; i++){
                        if(list[i] == 'invisible'){
                            return;
                        }
                    }
                    document.getElementsByClassName('insets')[0].classList.add('invisible');
                } else{
                    document.getElementsByClassName('insets')[0].classList.remove('invisible');
                }
                var liList = document.getElementsByClassName('insets')[0].getElementsByTagName('li');
                for(var j =0; j < liList.length; j++){
                    liList[j].classList.remove('active');
                }
                switch (toState.name){
                    case "analitics":
                        document.getElementsByClassName('insets')[0].getElementsByTagName('li')[0].classList.add('active');
                        break;
                    case "data":
                        document.getElementsByClassName('insets')[0].getElementsByTagName('li')[1].classList.add('active');
                        break;
                    case "server-code":
                        document.getElementsByClassName('insets')[0].getElementsByTagName('li')[2].classList.add('active');
                        break;
                    case "push":
                        document.getElementsByClassName('insets')[0].getElementsByTagName('li')[3].classList.add('active');
                        break;
                    case "settings":
                        document.getElementsByClassName('insets')[0].getElementsByTagName('li')[4].classList.add('active');
                        break;
                    default:
                        break;
                }
                console.log('toState.name ', toState.name);
                console.log('$rootScope.show ', $rootScope.show);
            })
    });

angular.module('skorohod')
    .service('skorohodService', function(){
        var inset = ['Аналитика', 'Данные', 'Серверный код', 'Push', 'Настройки'];
    });
