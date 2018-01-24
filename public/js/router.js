(function() {
    var app = angular.module('zq', ['ui.router']);
    //--------------------------------------路由部分-----------------------------------------------
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'views/home.html',
            })
            .state('hotel', {
                url: '/hotel',
                templateUrl: 'views/hotel.html',
            })
            .state('hotel_detail', {
                url: '/hotel/detail/:id',
                params: { 'id': null },
                templateUrl: 'views/hotel_detail.html',
            })
            .state('buy', {
                url: '/buy',
                templateUrl: 'views/buy.html'
            })
            .state('buy_consume', {
                url: '/buy/consume',
                templateUrl: 'views/buy_consume.html'
            })
            .state('buy_pay', {
                url: '/buy/pay',
                templateUrl: 'views/buy_pay.html'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'views/user.html'
            })
            .state('article_detail', {
                url: '/article/detail',
                templateUrl: 'views/article_detail.html'
            })
    }])


})();