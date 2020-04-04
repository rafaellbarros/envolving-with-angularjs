module.exports = function($http, configValue){

    this.getClients = function(){
        return $http.get(configValue.apiURL);
    }  

    this.saveClients = (client) => {
        return  $http.post(configValue.apiURL, client);
    };

};