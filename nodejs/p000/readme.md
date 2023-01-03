var require = function(src){ //line 1
var fileAsStr = readFile(src) //line 2
var module.exports = {} //line 3
eval(fileAsStr) //line 4
return module.exports} //line 5
