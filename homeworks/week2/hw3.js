
function reverse(str){
  var reverseStr =''
  for(var i=str.length-1; i>=0; i--){
    reverseStr += str[i]
  }
  return reverseStr
}
console.log(reverse('hello'))
