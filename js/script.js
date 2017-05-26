" use strict ";

var display = document.getElementById("display");
var array1 = [];
var array2 = [];

var arr1 = ["a", "b", "c", "d"];
var arr2 = [1, 2, 3, 4];

function yourFunctionName (){
  display.innerHTML = "hello";
}

function example(){
  var v = 3 +4;

  display.innerHTML = v;
}

function combineArrays(array1, array2) {
  var length;
  var combinedArray = [];
  if (array1.length <= array2.length) {
    length = array2.length;
  }
  for (var i = 0; i < length; i++) {
    combinedArray.push(array1[i]);
    combinedArray.push(array2[i]);
  }
  display.innerHTML = combinedArray.toString();
}
