module.exports = function($scope, $http){
    $scope.name = "My Pizza"
    
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

    };
    $scope.edit = function(client){
        $scope.client = client;
        $scope.editing = true;
    };
    $scope.save = function() {
        addClients(angular.copy($scope.client));
        $scope.formClient.$setPristine();
        delete $scope.client;
        $scope.editing = false;
    };
    $scope.destroy = function(client) {
        $scope.clients.splice($scope.clients.indexOf(client),1);
        destroyClients(client);

    };
    $scope.orderBy = function(col){
        $scope.order = col;
        $scope.reverse = !$scope.reverse;
    };
};