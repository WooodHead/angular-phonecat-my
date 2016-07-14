
angular.module('phoneList').component(
	'phoneList', {
	templateUrl : 'angular/phone-list/phone-list.template.html',
	controller :
["$http",
  function PhoneListController($http) {
		var self=this;
    self.orderProp='age';
    $http.get('/phones/phones.json').then(function(res){
      self.phones=res.data;
    });
	}
  ]
});
