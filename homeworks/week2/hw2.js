
function capitalize(str) {

  let firstCharCode = str.charCodeAt(0)
  let output = ''

  if ( !(firstCharCode >= 97 && firstCharCode <= 122) ){
    return str
  }

  if (firstCharCode >= 97 && firstCharCode <= 122){
    let firstChar = String.fromCharCode (firstCharCode - 32)
    for( let i=0; i<str.length; i++ ){
      if( i == 0 ){
        output = output + firstChar
      }else{
        output = output + str[i]
      }
    }
  }
  return output
}
capitalize('hello')


