module.exports = function(bonusGeneratorProvider, configConstant){
    console.log(bonusGeneratorProvider.getLength());
    bonusGeneratorProvider.setLength(20);
    console.log(configConstant);
};