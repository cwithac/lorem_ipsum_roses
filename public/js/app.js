const app = angular.module('OctogonApp', ['ngRoute']);

app.controller('MainController', ['$http', function($http){

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

// window.onscroll = function() {myFunction()};
// const header = document.getElementById("navigation");
// const sticky = header.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// };
