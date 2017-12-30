const app = angular.module('OctogonApp', ['ngRoute']);

app.controller('MainController', ['$http', function($http){

  this.showLanding = true;
  this.showContact = false;

  this.showContactPage = () => {
    this.showLanding = false;
    this.showContact = true;
  };

  this.showLandingPage = () => {
    this.showLanding = true;
    this.showContact = false;
  };

}]); //

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider.when("/contact", {
    templateUrl: "../partials/contact.html"
  });

  $routeProvider.otherwise({
  redirectTo: '/'
  });

}]); //
