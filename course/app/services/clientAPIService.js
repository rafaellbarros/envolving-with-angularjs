module.exports = function($http, configValue){
    
    var _getClients = function(){
        return $http.get(configValue.apiURL);
    };

    var _saveClients = function(client){
        return $http.post(configValue.apiURL, client);
    };

    return {
        getClients: _getClients,
        saveClients: _saveClients
    };
}