function printStars(n) {
  var ans = ''
  if( n>=1 && n<=30 ){
    for (var i =1; i<=n;i++){
      ans += '*'
    }
    console.log (ans)
  }else{
    console.log('no ans')
  }
}
printStars(5)