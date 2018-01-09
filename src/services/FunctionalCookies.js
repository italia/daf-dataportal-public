function returnCookie(str){
  return str
    .trim()
    .split("=")
    .reduce((name, value) =>
      value)
}
export function getCookie(name){
  var userName = '';
  var decodeuri = decodeURIComponent(document.cookie)
  var split = decodeuri.split(";")
  split.map((str) => {
    if(str.includes(name + "=")){
      userName = returnCookie(str);
    }
  })
  return userName;
}
