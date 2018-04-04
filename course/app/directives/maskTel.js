module.exports = function(){
    return {
        require: "ng-model",
        link: function(scope, element, attributes, controller) {
            //console.log(scope);
            //console.log(element);
            //console.log(attributes);

            element.bind("keyup", function (){
                //console.log(scope.formClient.telClient.$viewValue);

                var _formatTel = function(value) {
                    value = value.replace(/[^0-9]+/g,"");
                    if(value.length > 4 && value.length <= 8){
                        value = value.substring(0,4) + "-" + value.substring(4,8);
                    } else if( value.length > 4){
                        value = value.substring(0,4) + "-" + value.substring(5,9);
                    }

                    return value;
                };

                console.log(controller.$viewValue);
                controller.$setViewValue(_formatTel(controller.$viewValue));
                controller.$render();
            });

            controller.$parsers.push(function(value){

                if(value.length > 8){
                    //value = value.replace(/[^0-9]+/g,"");
                    return value;
                }

            });
        }
    };
};