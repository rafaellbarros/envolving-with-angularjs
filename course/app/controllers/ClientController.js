module.exports = function($scope, $filter, clientAPIService, configValue, routeInfo, $routeParams){
    
    $scope.name = $filter("uppercase")(configValue.appName);
    $scope.msg = "";
    $scope.clients = [];
    $scope.page = routeInfo.routeName;
    $scope.navClass = routeInfo.navClass;
 
    
    var listClient = function(){
        clientAPIService.getClient($routeParams.id).then(function(response){
            //console.log(response.data);
            //console.log(response.status);
            $scope.client = response.data;
        });
    };

    listClient();

};