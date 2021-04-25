function join(arr, concatStr) {
  var str =''
  for(var i=0; i<arr.length; i++){
    if(i==arr.length-1){
      str += arr[i]
    }else{
      str += arr[i] + concatStr
    }
  }
  return str
}

function repeat(str, times) {
  var totalStr = ''
  for(var i=0; i<=times; i++){
    totalStr += str
  }
  return totalStr
}

console.log(join(['a','b','c'], '!'));
console.log(repeat('a', 5));
