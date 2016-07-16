
angular.module('phonecatApp').config(['$locationProvider', '$routeProvide'],
function config($locationProvider,$routeProvider){
  $locationProvider.hashPrefix('!');
  $routeProvider
  .when('/phones',{
    template:'<phone-list></phone-list>'
  })
  .when('/phones/:phoneId',{
  template:'<phone-detail></phone-detail>'
  })
  .otherwise('/phones')
  
});