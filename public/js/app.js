const app = angular.module('OctogonApp', ['ngRoute']);

app.controller('MainController', ['$http', function($http){

  this.showLanding = true;
  this.showContact = false;

  this.contactData = {};

  this.message = '';

  this.submitContactForm = () => {
    $http({
      url: '/contacts',
      method: 'POST',
      data: this.contactData
    }).then(response => {
      console.log(response.data);
      this.contactData = {};
      this.message = 'Thank you for your submission.'
    }, ex => {
      console.log(ex.data.err);
    }).catch(err => this.error = "404");
  };

  this.showContactPage = () => {
    this.showLanding = false;
    this.showContact = true;
    this.message = '';
  };

  this.showLandingPage = () => {
    this.showLanding = true;
    this.showContact = false;
    this.message = '';
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
