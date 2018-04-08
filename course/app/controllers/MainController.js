module.exports = function($scope, $http, $filter){
    
    $scope.name = $filter("uppercase")("My Pizza");
    $scope.msg = "";
    $scope.clients = [];

    
    var listClients = function(){
        $http.get('http://localhost:8080').then(function(response){
            //console.log(response.data);
            //console.log(response.status);
            $scope.clients = response.data;
        });
    };

    var addClients = function(client){
        $http.post('http://localhost:8080',client).then(function(response){
            console.log(response.data);
            console.log(response.status);
            listClients();
        });
    };
    var destroyClients = function(client){
        client.delete = true;
        $http.post('post.php',client).then(function(response){
            console.log(response.data);
            console.log(response.status);
        });
    };

    listClients();


    $scope.add = function(client){
        addClients(angular.copy(client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.msg = "Successfully added record";

    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
        $scope.msg = "";
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
        $scope.msg = "Successfully edited record";
    };
    $scope.destroy = function(client) {
        $scope.clients.splice($scope.clients.indexOf(client),1);
        destroyClients(client);
        $scope.msg = "Successfully deleted record";

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};